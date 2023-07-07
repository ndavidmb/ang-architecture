import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorMatcherService } from '../../shared/utils/error-matcher.util';
import { EmailForm } from '../interfaces/ui/email-form';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-2',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  template: `<form [formGroup]="form">
    <mat-form-field class="example-full-width">
      <mat-label>Email</mat-label>
      <input
        type="email"
        matInput
        formControlName="email"
        [errorStateMatcher]="errorMatcherService.matcher"
        placeholder="Ex. pat@example.com"
      />
      <mat-hint>Errors appear instantly!</mat-hint>
      <mat-error
        *ngIf="
          !form.controls.email.hasError('required') &&
          form.controls.email.hasError('email')
        "
      >
        Please enter a valid email address
      </mat-error>
      <mat-error *ngIf="form.controls.email.hasError('required')">
        Email is <strong>required</strong>
      </mat-error>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <mat-label>Password</mat-label>
      <input
        type="password"
        matInput
        formControlName="password"
        [errorStateMatcher]="errorMatcherService.matcher"
        placeholder="Password"
      />
      <mat-hint>Errors appear instantly!</mat-hint>
      <mat-error *ngIf="form.controls.password.hasError('required')">
        Password is <strong>required</strong>
      </mat-error>
    </mat-form-field>
  </form>`,
})
export class Form2Component {
  #formBuilder = inject(NonNullableFormBuilder);
  errorMatcherService = inject(ErrorMatcherService);

  form: FormGroup<EmailForm> = this.#formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  getRawValue() {
    return this.form.getRawValue();
  }

  getIsValid() {
    return this.form.valid;
  }
}
