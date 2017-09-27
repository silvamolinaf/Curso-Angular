import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  pensamiento: string;
  
  public aPensamiento: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aPensamiento = [];
  }

  btnBorrar() {
    this.aPensamiento = [];
  }

  btnPensamientos() {
    this.aPensamiento.push(this.pensamiento);
  }
}
