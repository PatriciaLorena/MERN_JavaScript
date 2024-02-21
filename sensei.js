class Ninja{
    constructor(nombre, salud=100, velocidad=3, fuerza=3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinkSake(){
        this.fuerza += 10;
    }
}

const ninja1 = new Ninja("Hyabusa","medio");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200, 10, 10);
        this.sabiduria = 10;
    }

    speakWisdom() {
        //tambien se usa super para llamar a los metodos de la clase padre
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();