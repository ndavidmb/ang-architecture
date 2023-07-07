import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiFormPageComponent } from './pages/multiform-page.component';


const routes: Routes = [
  {
    path: '',
    component: MultiFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiFormRoutingModule { }
