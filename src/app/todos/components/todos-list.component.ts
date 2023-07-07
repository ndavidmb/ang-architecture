import { Component, Input, OnInit, inject } from '@angular/core';
import { Todo } from '../interfaces/model/todos';
import { TodosStateSignalsService } from '../data-access/state/todos-state.signals.service';

@Component({
  selector: 'app-todos-list',
  template: `<table>
    <thead>
      <th>Id</th>
      <th>Completed</th>
      <th>To do</th>
    </thead>
    <tbody>
      <tr *ngFor="let todo of todos">
        <td>{{ todo.id }}</td>
        <td>
          <input
            type="checkbox"
            (change)="changeTodoState($event, todo)"
            [checked]="todo.completed"
          />
        </td>
        <td>{{ todo.todo }}</td>
      </tr>
    </tbody>
  </table>`,
})
export class TodosListComponent {
  @Input() todos!: Todo[];

  todosState = inject(TodosStateSignalsService);

  changeTodoState(event: Event, templateTodo: Todo) {
    const inp = event.target as HTMLInputElement;
    // this.todosState.

    // this.todosState.setTodos(
    //   this.todos.map((todo) =>
    //     todo.id === templateTodo.id
    //       ? { ...templateTodo, completed: inp.checked }
    //       : todo
    //   )
    // );
  }
}
