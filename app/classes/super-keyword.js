import Animal from './animal';

class Zebra extends Animal{

  constructor(name, color, age, favouriteFood) {
    super(name, color, age, favouriteFood); // lets pass these arguments to the super constructor which is Animal
  }

  eat() { // normal method
    // you can still the original eat() after overriding
    super.eat();
    //then define your own implementation
    console.log("zebra now now also eats flies");
  }
}

export default () => {
  console.log("\n6.4 - Super keyword \n"+"*".repeat(50));
  const zebra = new Zebra("Zebra", "black and white", 9, "grass");
  zebra.eat();
}
