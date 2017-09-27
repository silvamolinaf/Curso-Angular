import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  user: Usuario;

  constructor() { }

  ngOnInit() {
    this.user = {firstname: '', lastname: '', phoneNumber: '' };
  }

  borrar () {
    this.user = {firstname: '', lastname: '', phoneNumber: '' };
    console.log('Infomación eliminada');
  }

  enviar () {
    console.log('Infomación enviada');
  }
}
