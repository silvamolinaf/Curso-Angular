import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
  }

  info (oEvt) {
    console.log(oEvt);
  }
}
