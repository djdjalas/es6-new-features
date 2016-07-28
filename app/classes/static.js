class Animal {

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

export default () => {
  console.log("\n6.3 - Static \n"+"*".repeat(50));
  /*
    from static
    static blocks are shared amongst all classes of type Animal
  */
  Animal.sayHello();
}
