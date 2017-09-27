import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// IMPORTADO PARA ...
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
