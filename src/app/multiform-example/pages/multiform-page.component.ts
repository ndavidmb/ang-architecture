import { Component, ViewChild } from '@angular/core';
import { ErrorMatcherService } from '../../shared/utils/error-matcher.util';
import { Form1Component } from '../components/form-1.component';
import { Form2Component } from '../components/form-2.component';

@Component({
  selector: 'app-multiform-wrapper',
  providers: [ErrorMatcherService],
  template: `
    <section>
      <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
        <mat-tab label="First"><app-form-1></app-form-1></mat-tab>
        <mat-tab label="Second"><app-form-2></app-form-2></mat-tab>
        <mat-tab label="Third"><app-form-3></app-form-3></mat-tab>
      </mat-tab-group>

      <button [disabled]="!isValid()" (click)="saveInfo()">Click me</button>
    </section>
  `,
})
export class MultiFormPageComponent {
  @ViewChild(Form1Component) form1!: Form1Component;
  @ViewChild(Form2Component) form2!: Form2Component;

  saveInfo() {
    console.log(this.form1.getRawValue(), this.form2.getRawValue());
  }

  isValid() {
    return this.form1?.getIsValid() && this.form2?.getIsValid();
  }
}
