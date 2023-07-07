import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosFacade } from '../data-access/facade/todos.facade';

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
