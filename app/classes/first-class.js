

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

  }

  export default () => {
    console.log("\n6.1 - Classes \n"+"*".repeat(50));
    // very abstract animal
    const animal = new Animal("Plain animal", "no color", 2, "none");
    console.log(animal)
    animal.sleep();
    animal.eat();
  }
