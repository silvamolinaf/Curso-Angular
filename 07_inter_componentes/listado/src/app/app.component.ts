import { Component } from '@angular/core';
import { Item } from './item/item.model';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private items: Item[] = [];
}
