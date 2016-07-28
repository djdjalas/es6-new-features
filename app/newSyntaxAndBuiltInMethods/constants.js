export default () => {
  /*
    constants are the same as let but they cannot be re assigned. Thats the only difference
  */
  const NAME = "Nelson";

  /*
    NAME = {};  error remember name cannot be re assigned
  */

  /*
    so in this example we are not re assigning the varibale, we are changing the contents
    this is absolutely fine
  */
  const person = {};
  person.name = "Nelson";
  person.surname = "Jammal";
  console.log(person);

}
