// Creating an object using object literal notation
const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  person.greet(); // Output: Hello, my name is John


  // Constructor function with prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.greet1 = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person('John', 30);
  john.greet1(); // Output: Hello, my name is John
  
  // Parent Class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log('Generic animal sound');
    }
  }
  
  // Child Class inheriting from Animal using extends
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calling the constructor of the parent class
      this.breed = breed;
    }
  
    bark() {
      console.log('Woof!');
    }
  }
  
  // Creating instances
  const myDog = new Dog('Buddy', 'Labrador');
  
  // Accessing methods
  myDog.makeSound(); // Output: Generic animal sound
  myDog.bark(); // Output: Woof!
  




  