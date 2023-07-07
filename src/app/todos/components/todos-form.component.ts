import { Component, effect, inject } from '@angular/core';
import { TodosFacade } from '../data-access/facade/todos.facade';
import { TodosStateSignalsService } from '../data-access/state/todos-state.signals.service';
import { REQUEST_STATE } from '../interfaces/model/todos-state';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todos-form',
  template: `<div>
    <button mat-dialog-close>Close</button>
    <button (click)="callDelayedFoo()">Call delayed function</button>
    <button (click)="callDelayedFoo(true)">Call error</button>
  </div>`,
})
export class TodosFormComponent {
  #todosFacade = inject(TodosFacade);
  #dialogRef = inject(MatDialogRef<TodosFormComponent>);

  constructor() {}

  callDelayedFoo(error = false) {
    this.#todosFacade
      .callDelayedFoo({
        todo: 'test delayed',
        completed: false,
      }, error)
      .subscribe({
        next: () => {
          this.#dialogRef.close();
        },
        error: () => {
          console.log('error');
        },
      });
  }
}
