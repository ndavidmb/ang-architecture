import { FormControl } from '@angular/forms';

export interface EmailForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
