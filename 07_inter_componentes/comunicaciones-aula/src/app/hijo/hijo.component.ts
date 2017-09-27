import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public sNombreHijo: string;
  @Output()
  public eventoBorrar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  btnBorrar(oEv){
    console.log(oEv);
    this.eventoBorrar.emit(true);
  }
}
