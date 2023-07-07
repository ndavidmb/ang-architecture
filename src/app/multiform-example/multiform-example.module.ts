import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiFormPageComponent } from './pages/multiform-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MultiFormRoutingModule } from './multiform-example.routing.module';
import { Form1Component } from './components/form-1.component';
import { Form2Component } from './components/form-2.component';
import { Form3Component } from './components/form-3.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MultiFormRoutingModule,
    Form1Component,
    Form2Component,
    Form3Component,
  ],
  exports: [],
  declarations: [MultiFormPageComponent],
  providers: [],
})
export class MultiFormModule {}
