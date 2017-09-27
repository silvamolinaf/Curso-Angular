// ejemplo de clase en TypeScript
export class Empleado {

    private nombre: string;
    private salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    getNombre() {
        return this.nombre;
    }
    
    toString() {
        return "Nombre:" + this.nombre +
            ", Salario:" + this.salario;
    }
}