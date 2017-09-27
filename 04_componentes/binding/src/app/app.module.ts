import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioBnbComponent } from './formulario_bnb/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioBnbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }