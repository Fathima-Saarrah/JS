// Objects are variables that can store both values and functions.
// Values are stored as key:value pairs called properties.
// Functions are stored as key:function() pairs called methods.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
person.nationality = "English";
delete person.age;
console.log(person);
console.log("firstName" in person);
console.log();


//nested objects
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.myCars.car2);
console.log();


//this Keyword
// The this keyword refers to an object.
// this is used to access the object that is calling a method.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};

let number = person1.getId();
console.log(number);
console.log();


//ADDING METHOD TO OBJECT 
person1.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person1.name());
console.log();


//to covert to array and string
console.log(Object.values(person1));
console.log(JSON.stringify(person1));
console.log();


//Object Constructor
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

console.log(myFather.age);