// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Todo } from '../../interfaces/model/todos';
// import { TodoState } from '../../interfaces/model/todos-state';

// @Injectable()
// export class TodosStateService {
//   #todos = new BehaviorSubject<TodoState>({
//     todos: [],
//     limit: 0,
//     skip: 0,
//     total: 0,
//     loading: false,
//   });

//   updateTodos({ id, completed }: Pick<Todo, 'id' | 'completed'>) {}

//   setTodos(todos: Todo[]) {
//     this.#todos.next({ ...this.#todos.value, todos: [...todos] });
//   }

//   setResponseTodo(todo: TodoState) {
//     this.#todos.next(structuredClone(todo));
//   }

//   getTodos() {
//     return this.#todos.asObservable();
//   }
// }
