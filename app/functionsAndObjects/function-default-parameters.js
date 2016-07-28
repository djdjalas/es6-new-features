export default () => {

  /*
    default parametres allow variables to have default values so in case you parametre is passed into the
    function the default value is used.
      consider the following :
      function calculateYearlyEarnings(salary, bonus){
        return salary + bonus;
      }
      this method can be transformed to have default paramaters if for example we know that every employee
    base salary is 18k because bonus is unkown istead of passing 0 to every function call we can set it to 0;
  */

  function calculateYearlyEarnings() {
    var salary = arguments.length <= 0 || arguments[0] === undefined ? 18000 : arguments[0];
    var bonus = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return salary + bonus;
  }

  console.log("$" + calculateYearlyEarnings());
};
