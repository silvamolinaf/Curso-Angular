import { LibrosService } from '../services/libros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;
  constructor(private svBuscar: LibrosService) {
    this.aResultados = new Array<any>();
  }

  ngOnInit() {
  }

  btnBuscar() {
    this.aResultados = this.svBuscar.getBooks(this.claveBusqueda);
    console.log(this.aResultados);
  }
}
