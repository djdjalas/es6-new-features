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
    console.log(`${this.name} sleeps`);
  }

}

class Dog extends Animal {
  constructor(name, color, age, favouriteFood) {
    super(name, color, age, favouriteFood); // lets pass these arguments to the super constructor which is Animal
  }

  sleep() {
    console.log(`${this.name} sleeps like a boss`);
  }
}

export default () => {
  console.log("\n6.2 - Inheritance \n"+"*".repeat(50));
  /*
    dog extends animal
    dog now inherites all methods from Animal and we can override all methods from
    its super class and define new ones if needed
  */
  const dog = new Dog("dog", "pink", 5, "bones");
  console.log(dog);
  dog.sleep();
  dog.eat();

}
