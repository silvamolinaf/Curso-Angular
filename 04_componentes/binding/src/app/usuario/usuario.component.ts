import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public oUsuario: {
    nombre: string, apellido: string
  };

  pensamiento: string;

  public aAficiones: Array<string>;

  public aPensamiento: Array<string>;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre : ' ', apellido : ' '};
    this.aAficiones = ['furbo', 'baske', 'voleibol'];
    this.aPensamiento = [];
  }

  btnBorrar() {
    this.oUsuario = {nombre : ' ', apellido : ' '};
  }

  btnPensamientos() {
    this.aPensamiento.push(this.pensamiento);
  }
}
