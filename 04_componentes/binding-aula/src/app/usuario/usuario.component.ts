import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public oUsuario: {nombre: string,
                    apellido: string};

  public aAficiones: Array<string>;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre: 'Pepe', apellido: 'Perez'};
    this.aAficiones = ['Leer', 'Viajar', 'Comer'];
  }

  btnBorrar(oEv) {
    this.oUsuario.nombre = '';
    this.oUsuario.apellido = '';
    console.log(oEv);
  }

  verUsuario() {
    console.log(this.oUsuario);
  }

}
