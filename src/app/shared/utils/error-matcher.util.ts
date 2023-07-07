import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorMatcherService {
  matcher: CustomErrorMatcher;

  constructor() {
    this.matcher = new CustomErrorMatcher();
  }
}
