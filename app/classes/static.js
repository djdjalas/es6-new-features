import Animal from './animal'
export default () => {
  console.log("\n6.3 - Static \n"+"*".repeat(50));
  /*
    from static
    static blocks are shared amongst all classes of type Animal
  */
  Animal.sayHello();
}
