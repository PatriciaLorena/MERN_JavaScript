//Reescribe el código dado como lo ve el intérprete
//Predecir las salidas
//Ejecuta el código original y compara las salidas con tus prediccione0s.
//1
console.log(hello);                                   
var hello = 'world';                                 
//------
var hello; // la variable hello se eleva
console.log(hello); // devuelve el valor  `undefined`, ya que hello aun no se ha definido.
hello = 'world'; //asigna el valor world a la variable hello
//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//-----
var needle; // Declara la variable needle globalmente
needle = 'haystack'; // Asigna el valor 'haystack' a la variable needle
test(); // Llama a la función test
function test(){ // Declara la función test
    var needle; // Declara la variable needle localmente dentro de la función test
    needle = 'magnet'; // Asigna el valor magnet a la variable needle local
    console.log(needle); // Imprime el valor de la variable needle local que es magnet
}
//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//------
var brendan; // define la variable brendan
brendan = 'super cool'; // asigna valor
function print(){ //crea function
    brendan = 'only okay'; //cambia el valor de la variable brendan
    console.log(brendan); // no imprime nada porque no se llamo a la funcion print
}
console.log(brendan);  // imprime super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//------
var food;// food = 'chicken';
console.log(food); // imprime undefinede porque aun no le asigno valor a foot
eat(); // se llama a la funcion eat
function eat(){
    food = 'half-chicken';
    console.log(food);// imprime  'half-chicken'
    var food = 'gone';
}

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//------
var mean; //declara la variable mean
//mean(); // llama a la funcion mear que da error 
//console.log(food); // da error ya que la variable food aun no ha sido declarado
mean = function() {
    var food; // declara la variable food
    food = "chicken"; // asigna el valor chicken a la variable food
    console.log(food);// imprime chicken
    food = "fish"; // asigna el valor fisch a la variable food
    console.log(food); // imprime fish
}
//console.log(food); // da error ya que la variable food aun no ha sido declarado
console.log(mean()); // imprime chicken fish undefined(imprime undefined ya que la funcion no retorna ningun valor)

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//--------
var genre; // declara la variable genre
console.log(genre); // imprime undefinet
genre = "disco"; // asigna valor disco a la varible genre
rewind(); // llama a la funcion wewind
function rewind() { //cre la funcion 
    genre = "rock"; // reasigna la variable 
    console.log(genre); // imprime rock
    var genre = "r&b"; // reasigna la variable
    console.log(genre); // imprime r&b
}
console.log(genre); // imprime disco
//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//-----
var dojo; // deeclara la varible dojo ya que var permite elevacion aunque este dentro de una funcion
dojo = "san jose"; // asigna valor a la varialbe dojo
console.log(dojo); // inprime San JOse
learn(); // llama  a la funcion learn
function learn() { // crea la funcion learn
    dojo = "seattle"; // reasigan valor 
    console.log(dojo); // imprime seattle
    dojo = "burbank"; // resigna valor
    console.log(dojo); // imprie burbank
}
console.log(dojo); // imprime burbank


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; // las constantes no se elevan 
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = false;
        //dojo = "closed for now";
    }
    return dojo;
}






