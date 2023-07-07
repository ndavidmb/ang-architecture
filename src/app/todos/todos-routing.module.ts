import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosWrapperComponent } from './todos-wrapper.component';
import { Page1Component } from './pages/page-1.component';
import { Page2Component } from './pages/page-2.component';
import { Page3Component } from './pages/page-3.component';
import { TodosDemoComponent } from './pages/todos-demo.component';
import { TodosSignalsComponent } from './pages/todos-signals.component';

const routes: Routes = [
  {
    path: '',
    component: TodosWrapperComponent,
    children: [
      {
        path: 'page-1',
        component: Page1Component,
      },
      {
        path: 'page-2',
        component: Page2Component,
      },
      {
        path: 'page-3',
        component: Page3Component,
      },
      {
        path: 'demo',
        component: TodosDemoComponent,
      },
      {
        path: 'signals',
        component: TodosSignalsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
