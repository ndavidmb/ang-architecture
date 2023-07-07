import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, map, throwError, timer } from 'rxjs';
import { Todo } from '../../interfaces/model/todos';
import { TodosAPIService } from '../api/todos-api.service';
import { TodosStateSignalsService } from '../state/todos-state.signals.service';

// It is just injected in this module, when the module change this is destroyed
@Injectable()
export class TodosFacade {
  #todosApiService = inject(TodosAPIService);
  #todosStateSignalsService = inject(TodosStateSignalsService);

  constructor() {
    this.#init();
  }

  // Private methods
  #init() {
    console.log('initialized');
    // New rxjs operator to destroy when the service is destroyed
    this.#loadSignalsState().pipe(takeUntilDestroyed()).subscribe();
  }

  #loadSignalsState() {
    this.#todosStateSignalsService.setLoading(true);

    return this.#todosApiService.getTodos().pipe(
      // Use map because it allow to change the response to "void" instead of service response
      map((response) =>
        this.#todosStateSignalsService.setResponseTodo({
          ...response,
          loading: false,
        })
      )
    );
  }

  addTodo(todo: Omit<Todo, 'id'>) {
    const todos = this.#todosStateSignalsService.todos();
    const lastTodoId = todos.at(-1)?.id;
    if (lastTodoId) {
      this.#todosStateSignalsService.addTodo({ ...todo, id: lastTodoId + 1 });
    }
  }

  callDelayedFoo(todo: Omit<Todo, 'id'>, error: boolean): Observable<void> {
    this.#todosStateSignalsService.setLoading(true);
    if (error) {
      this.#todosStateSignalsService.setLoading(false)
      throw 'error';
    }

    return timer(2000).pipe(
      map(() => {
        this.addTodo(todo);
      }),
      finalize(() => this.#todosStateSignalsService.setLoading(false))
    );
  }
}
