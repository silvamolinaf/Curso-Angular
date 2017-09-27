// Modulos de Angular utilizados
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos propios
import {SharedModule} from './shared/shared.module';
// Componebtes incluidos en el módulo
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabezaComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
