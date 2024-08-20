//Typecastin- conversion of one datatype into another datatype

console.log(10 + 10);

//Example of implicit typecasting
console.log(10 + "str"); // number is converted to string
console.log("str" + 60);
console.log(100 - "10"); // string is converted to number
console.log(100 - "str"); //NAN
console.log(100 * "5"); // string is converted to number
console.log("100" / 10); //same

//Example of explicit typecasting
let x = '100';
console.log(typeof x);

//parseInt()->inbuilt method used to convert string into number
parseInt(x);