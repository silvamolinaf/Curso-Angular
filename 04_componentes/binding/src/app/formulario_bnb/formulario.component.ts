import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-bnb',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioBnbComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
  }

  btnBorrar (evento) {
    this.nombre = '';
    console.log(evento);
  }

}
