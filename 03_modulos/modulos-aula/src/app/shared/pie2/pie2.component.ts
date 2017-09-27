import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie2',
  template: `
  <p>
    {{empresa}}
  </p>
  `,
  styleUrls: ['./pie2.component.css']
})
export class Pie2Component implements OnInit {

  empresa: string;
  constructor() { }

  ngOnInit() {
    this.empresa = 'IconoTC';
  }

}
