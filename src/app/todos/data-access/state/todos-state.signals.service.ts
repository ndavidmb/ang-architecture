import { Injectable, computed, signal } from '@angular/core';
import { Todo } from '../../interfaces/model/todos';
import { REQUEST_STATE, TodoState } from '../../interfaces/model/todos-state';

@Injectable()
export class TodosStateSignalsService {
  todosState = signal<TodoState>({
    todos: [],
    limit: 0,
    skip: 0,
    total: 0,
    loading: false,
    requestState: REQUEST_STATE.NOT_SENT,
    error: null,
  });

  todos = computed(() => this.todosState().todos);
  requestState = computed(() => this.todosState().requestState);
  error = computed(() => this.todosState().error);

  setTodos(todos: Todo[]) {
    this.todosState.mutate((currentState) => {
      currentState.todos = [...todos];
    });
  }

  setRequestState(requestState: REQUEST_STATE) {
    this.todosState.mutate((state) => (state.requestState = requestState));
  }

  setResponseTodo(todo: Omit<TodoState, 'error' | 'requestState'>) {
    this.todosState.update((state) => ({ ...state, ...todo }));
  }

  setLoading(loading: boolean) {
    this.todosState.mutate((state) => (state.loading = loading));
  }

  addTodo(todo: Todo) {
    this.todosState.mutate((currentState) => {
      currentState.todos = [...currentState.todos, todo];
    });
  }
}
