import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  template: `<input
    [formControl]="todoDetail"
    (keyup)="handleKeyUp($event)"
  />`,
})
export class TodoAddComponent {
  @Output() inputChanges = new EventEmitter<string>();
  #fb = inject(NonNullableFormBuilder);

  todoDetail = this.#fb.control('', [Validators.required]);

  handleKeyUp(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.todoDetail.valid) {
      this.inputChanges.emit(this.todoDetail.getRawValue());
    }
  }
}
