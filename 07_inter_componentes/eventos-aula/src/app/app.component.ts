import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  isHidden: boolean
  hijoTitulo :string = "Componente hijo"
  hiddenTitle(hidden: boolean){
    console.log("Show:"+hidden)
    this.isHidden = hidden
  }
}