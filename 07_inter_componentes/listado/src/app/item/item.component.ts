import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  @Input()
  public item: Item;
  @Output()
  public eventoBorrar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  btnBorrar(oEv){
    this.eventoBorrar.emit(true);
  }
}
