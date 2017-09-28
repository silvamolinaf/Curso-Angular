import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private aBooks: string[] = [];

  constructor(private http: Http) { }

  search(title: string) {

    this.aBooks = [];

    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + title;

    this.http.get(url).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.aBooks.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }
}
