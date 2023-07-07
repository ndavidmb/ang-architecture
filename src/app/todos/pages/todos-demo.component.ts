import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
// import { TodosStateService } from '../data-access/state/todos-state.service';
// import { TodosFacade } from '../data-access/facade/todos.facade';

/*
1. interfaces ✅
2. librerías externas ✅
3. Fachadas. ✅
4. Integración de nuevas APIs de Angular ✅

  TODO: Revisar ejemplo cuando un modal se cierra después de llamar a un endpoint
6. Fachadas void conocer el estado de una o varias peticiones.

5. Caso de uso roles
    //TODO: Revisar caso de uso
    // combineLatest([hijo1.formGroup.valueChanges, hijo2.formGroup.valueChanges]).subscribe(([valor1, valor2]) => this.isValidBOth = valor1 && valor2) ✅
*/

@Component({
  selector: 'app-todos-demo',
  // template: `<div *ngIf="todoResponse$ | async as response">
  //   <app-todos-list [todos]="response.todos"></app-todos-list>
  // </div>`,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosDemoComponent {
  // todosState = inject(TodosStateService);
  // todosFacade = inject(TodosFacade);

  // todoResponse$ = this.todosState.getTodos();
}
