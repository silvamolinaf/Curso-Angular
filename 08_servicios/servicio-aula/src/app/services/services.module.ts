import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importacion del servicio.
import { LibrosService } from './libros.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LibrosService]
})
export class ServicesModule { }
