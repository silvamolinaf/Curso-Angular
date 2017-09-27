//File: lib/sample.js
module "sample" { 

export hello = (nombre) =>  {
        return nombre;
    }
}


//File: app.js
import { hello } from "sample";  
var app = {  
    foo: () => {
        hello("Carlos");
    }
}
export app;





