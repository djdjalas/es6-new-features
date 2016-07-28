export default () => {

  // repeat 3 times
  console.log("*");
  console.log("*");
  console.log("*");

  // no need to hard code simply use repeat
  console.log("*".repeat(3));

  const repeatedName = ["Joe ".repeat(10)];
  console.log(repeatedName);

  // index of is not very clear
  const name = "Maria";
  console.log(name.indexOf('Ma') > -1)

  // instead we have includes which very simple and clear
  console.log(name.includes("Ma"));

}
