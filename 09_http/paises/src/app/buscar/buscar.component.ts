import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

const URL = 'http://restcountries.eu/rest/v1/region/';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public continentes = ['europe', 'africa', 'americas', 'oceania', 'asia'];
  public aResultados = new Array<any>();
  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  btnBuscar() {
    this.aResultados = [];
    this.http.get(URL + this.claveBusqueda).subscribe(
      response => {
              console.log(URL + this.claveBusqueda);
              const data = response.json();
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                  const countryName = data[i].name;
                  this.aResultados.push(countryName);
                }

      },
      error => console.error(error)
    );
  }
}
