import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosWrapperComponent } from './todos-wrapper.component';
import { TodosDemoComponent } from './pages/todos-demo.component';
import { TodosListComponent } from './components/todos-list.component';
import { TodosSignalsComponent } from './pages/todos-signals.component';
import { TodosFormComponent } from './components/todos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './components/todos-search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TodosFacade } from './data-access/facade/todos.facade';
import { TodosStateSignalsService } from './data-access/state/todos-state.signals.service';

@NgModule({
  declarations: [
    TodosWrapperComponent,
    TodosDemoComponent,
    TodosListComponent,
    TodosSignalsComponent,
    TodosFormComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    MatDialogModule,
  ],
  providers: [TodosFacade, TodosStateSignalsService],
})
export class TodosModule {}
