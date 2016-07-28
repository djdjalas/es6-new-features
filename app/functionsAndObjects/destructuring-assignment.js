export default () => {

  /*
    The destructuring assignment syntax is a JavaScript
    expression that makes it possible to extract data from arrays or objects into distinct variables.
  */

  // extract from objects
  const alex = {
    name : 'Alex U',
    address : {
      postCode : 'E14',
      city : 'London'
    },
    age : '28'
  }

  const { name, age } = alex;
  const { name : n, age: a } = alex;

  console.log(`Name : ${name} Age : ${age} `);
  console.log(`Name : ${n} Age : ${a} `);

  // extracting from nested objects
  const {address: {city : location }} = alex;
  console.log(location);

  // extract from arrays
  var numbers = [1,2,3,4,5];
  const [ firstNumber, secondNumber ] = numbers;
  console.log(firstNumber);
  console.log(secondNumber);

  // extract from method functions
  const getStudentsFromDatabase = ({url , port , host = 123, protocol = 'http'}) => {
    console.log(`url is ${url} ${port} ${host}`);
  }

  getStudentsFromDatabase({
    port : 1010 ,
    url : 'google.com',
  });

  // TODO: COMMENTS

};
