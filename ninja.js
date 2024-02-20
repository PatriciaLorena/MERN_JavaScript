class Ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`El nombre del ninja es: ${ this.nombre} `);
    }
    showStats(){
        console.log(`el nombre del nimja es: ${this.nombre} tiene una saldud de ${this.salud} su velocidad es: ${this.velocidad} con una fuerza de ${this.fuerza}`);
    }
    drinSake(){
        this.fuerza +=3;
    }
}