"use strict";
export default () => {

  // arrow functions are simply shorter functions

  const names = ["Anna", "Maria", "John", "Mohammado"];

  /*
      consider
      const namesUpperCase = names.map(function(name){
      return name.toUpperCase();
    });
      this function becomes see bellow
    */

  const namesUpperCase = names.map(name => name.toUpperCase());

  console.log(namesUpperCase);

  /*
    create your own functions
      const squareNumber = function(number){
      return number * 2;
    }
      this function becomes see bellow
  */
  const squareNumber = (number) =>  number * 2;

  console.log(squareNumber(5));

  /*
    if your function has no parameters or you need to perform some operations before the return statement
    then you need body and return statement
    const getInterestRates = function(){
      return 3.92;
    }
    const getInterestRates = function(){
      const someNumber = 1.223;
      return 3.92 - someNumber;
    }
      this function becomes see bellow
    */

  const getInterestRates = () => {
    const someNumber = 1.223;
    return 3.92 - someNumber;
  };

  console.log(getInterestRates());

  /*
    you can also return objects but you need to wrap the object to return inside ( obj )
    */

  const getPerson = () => {
    return {
      name: 'Barbara'
    }
  };

  console.log(getPerson().name);
};
