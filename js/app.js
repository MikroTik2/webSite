//'use strict';

//var number = 5;
//var string = "Hello";
//var sym = Symbol();
//var boolean = true;     
//null;
//undefined;
//var obj = {};
//console.log(4/0);
//console.log('string'*9);


//let something;
//console.log(something);


////Операторы

//let incr = 10,
//    decr = 10;



//console.log(incr++);
//console.log(decr--);

//console.log(5%2);
//console.log("2" == 2);


//let person = {
//   name: "SFLJF",
//   age: 23,
//   isMarried: false,
//}
//console.table(person);

//const num1 = 10;
//const num2 = 20;

//let value;

//value = num1 + num2;

//value += 100;

   const num1 = 10;
const num2 = 20;

let value;

value = num1 + num2;
value += 100;

value = 0.7 + 0.6;

value =  +value.toFixed(1);

value = Math.PI;
value = Math.random();
value = Math.round(2.4);

value = Math.floor(Math.random() * 10 + 1);
const arr = ['black', 'black', 'black', 'pink', 'blue', 'red',];
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);
console.clear();

const firstName = 'Denis';
const lastName = 'Abrikos';
const age = 20;

const str = 'Hello my name is Artur';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value = value + ' l am ' + age;

value = firstName.length;
value = firstName[4];
value = lastName[lastName.length - 1];

value = firstName.concat(' ', lastName);
value = str.indexOf('my');
value = str.includes('');

value = str.slice(0, 5);  
value = str.replace('Artur', 'Denis');
console.log(value);
