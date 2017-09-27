import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
 
    @Input()
    pTitulo

    @Output()
    hidden = new EventEmitter<boolean>();

    visible = true;

    click(){
        this.visible = !this.visible;
        this.hidden.emit(this.visible);
    }
}