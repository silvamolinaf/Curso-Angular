import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  public oItem: {
    id: string, value: string
  };

  public aItems: Array<oItem>;

  constructor() { }

  ngOnInit() {
  }

}
