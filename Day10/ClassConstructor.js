// class and constructer
// class is stored in the script scope
// Local scope will be made for constructor

let a = 10;
var b = 20;

class Employee {
  //inside the class if we are going to define any
  //varaible or property we are not supposed to pass var,let and const keywords
  //if we are going to pass any function then we are not suppose to use the function keyword
  name = "Sachin";
  constructor(name, id) {
    this.eName = name;
    this.eId = id;
  }
  demo(a, b) {
    //we can use var,let,const only inside the function inside a class
    var x = 10;
    console.log("Hello World");
  }
}

var e1 = new Employee("Rohit", 45); //constuctor call
console.log(e1);

var e2 = new Employee("Virat", 18);
console.log(e2);

var e3 = new Employee("Jaspreet", 93);
console.log(e3);
