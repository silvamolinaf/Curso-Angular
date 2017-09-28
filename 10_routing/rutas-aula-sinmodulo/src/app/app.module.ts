import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
