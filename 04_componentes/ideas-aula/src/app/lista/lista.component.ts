import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aIdeas: Array<string>;
  sNuevaIdea: string;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
  }

  addIdea () {
    this.aIdeas.push(this.sNuevaIdea);
    this.sNuevaIdea = '';
  }

}
