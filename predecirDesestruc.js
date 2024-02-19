//problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // imprime Tesla
console.log(otherRandomCar) // imprime Mercedes

//problema2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); // produce un error ya que name no esta declarado en ambito global
console.log(otherName); //imprime Elon

//problema3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //imprime 12345
console.log(hashedPassword); // imprime undefine ya que la variable password no esta definido en el objeto person

//problema4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //desestrucura el numero 2
const [,,,second] = numbers; // desestrucutura el numero 5
const [,,,,,,,,third] = numbers; // desestructura el ultimo numero 2
//Predict the output
console.log(first == second); //imprime false
console.log(first == third); //imrpime true

//probelema5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // desestructura el valor de key que es value
const { secondKey } = lastTest; // desestructura el valos de secondkey que es un arreglo de numeros
const [ ,willThisWork] = secondKey; // desestructura el arreglo de numero guardado en la variable secondkey y trae el numero 5
//Predict the output
console.log(key); // imprime value
console.log(secondKey); // imprime [1,5,1,8,3,3]
console.log(secondKey[0]); // imprime 1
console.log(willThisWork); //imprime 5



