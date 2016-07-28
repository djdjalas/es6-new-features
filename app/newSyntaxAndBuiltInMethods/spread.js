export default () => {

  // spread is speading elemnets into an iterable collection

  // arrays
  const computerScienceStudents = ["jonh", "maria", "joe", "anna"];
  const mathsStudents = ["matt"];
  const newClass = [...mathsStudents, ...computerScienceStudents];
  console.log(newClass);

  // strigns
  const hello = "hello";

  const split = hello.split("");
  console.log(split.length);

  const newSplit = [...hello];
  console.log(newSplit.length);

}
