import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './extra.css']
})
export class AppComponent {

	incremento:number = 10;
	total:number = this.incremento;
	tamTitular:string = "titulargran";
	aClases:Array<string> = ["uno", "dos", "tres"];
	
	// oClaseTotal = { positivo : (this.total >= 0),
	//					   negativo : (this.total < 0)}
	

	sumar = function(){;
		this.total += parseInt(this.incremento);
	}
	restar = function(){
		this.total -= parseInt(this.incremento);
	}			
	

}
