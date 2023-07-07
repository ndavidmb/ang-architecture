import { Component, inject } from '@angular/core';
import { TodosFacade } from '../data-access/facade/todos.facade';
import { TodosStateSignalsService } from '../data-access/state/todos-state.signals.service';
import { MatDialog } from '@angular/material/dialog';
import { TodosFormComponent } from '../components/todos-form.component';

@Component({
  selector: 'app-todos-signals',
  template: `<div>
    <button (click)="openTestModal()">Modal</button>
    <app-todo-add (inputChanges)="handleChanges($event)"></app-todo-add>

    <app-todos-list [todos]="todosStateSignals.todos()"></app-todos-list>
  </div>`,
})
export class TodosSignalsComponent {
  dialog = inject(MatDialog);
  todosStateSignals = inject(TodosStateSignalsService);

  // Call the endpoint in its constructor
  #todosFacade = inject(TodosFacade);

  openTestModal() {
    this.dialog.open(TodosFormComponent);
  }

  handleChanges(value: string) {
    this.#todosFacade.addTodo({
      completed: false,
      todo: value,
    });
  }
}
