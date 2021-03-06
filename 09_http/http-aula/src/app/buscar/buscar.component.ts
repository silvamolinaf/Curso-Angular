import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados = new Array<any>();
  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  btnBuscar() {
    this.aResultados = [];
    this.http.get(URL + this.claveBusqueda).subscribe(
      response => {
              const data = response.json();
              if (!data.items === undefined) {
                for (let i = 0; i < data.items.length; i++) {
                  const bookTitle = data.items[i].volumeInfo.title;
                  this.aResultados.push(bookTitle);
                }
              }
      },
      error => console.error(error)
    );

  }
}
