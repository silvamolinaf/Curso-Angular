import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// modulos importados
import { SharedModule} from './shared/shared.module'
// componentes
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
