import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PieComponent],
  exports : [
    PieComponent
  ]
})
export class SharedModule { }
