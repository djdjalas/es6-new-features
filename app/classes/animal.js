export default class Animal {

  constructor(name, color, age, favouriteFood) { // use when animal is created
    this.name = name;
    this.color = color;
    this.age = age;
    this.favouriteFood = favouriteFood;
    console.log(`Animal : ${name} was created`);
  }

  eat() { // normal method
    console.log(`${this.name} is eating ${this.favouriteFood}`);
  }

  sleep() { // normal method
    console.log(`${this.name} sleepss`);
  }

  static sayHello() { // static method shared amongst all animals
    console.log("hello from static block");
  }

}
