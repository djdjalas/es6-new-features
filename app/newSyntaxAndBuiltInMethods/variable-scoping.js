export default () => {

  if(true){
    var name = "John";
  }

  console.log(name); // prints John

  if(true){
    let name = "Tom";
    console.log(name); // prints Tom
  }

  console.log(name); // prints John

  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }

  /*
  console.log(i); error i only visible withing for loop
  */

  // Remember from now on. Let is the new var. So stop using var unless you need a global variable

}
