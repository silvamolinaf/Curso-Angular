import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pie2Component } from './pie2/pie2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Pie2Component],
  exports : [Pie2Component]
})
export class SharedModule { }
