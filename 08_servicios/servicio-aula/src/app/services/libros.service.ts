import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  listaLibros: Array<string>;
  constructor() { }

  getBooks(title: string) {
    this.listaLibros = ['angularjs for dummies', 'angular for dummies'];
    return (this.listaLibros);
  }
}
