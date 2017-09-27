import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
})
export class PadreComponent  implements OnInit {

    public mainTitle: string;
    public hijoTitle: string;
    public isVisible: boolean;

    constructor() {

     }

    ngOnInit() {
      this.mainTitle  =   'Comunicación entre componentes';
      this.hijoTitle  =   'Componente hijo';
      this.isVisible  = true;
    }

    // Método manejador del evento
    ocultarTitulo(isHidden: boolean) {
      this.isVisible = isHidden;
      console.log('Hidden:' + isHidden);
    }
}