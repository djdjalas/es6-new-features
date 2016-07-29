import Animal from './animal';

export default () => {
  console.log("\n6.1 - Classes \n"+"*".repeat(50));
  // very abstract animal
  const animal = new Animal("Plain animal", "no color", 2, "none");
  console.log(animal)
  animal.sleep();
  animal.eat();
}
