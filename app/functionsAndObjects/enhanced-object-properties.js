export default () => {

  // this will serve to build the property name
  const getAg = () => {
    return "ag";
  }

  const person = {
    name, // same as name : ""
    getName() { // same as getName : function(){}
      console.log(this.name)
    },
    [ getAg() + "e"] : 20 // same as person[getAge+"e"] = 20
  }

  console.log(person);

};
