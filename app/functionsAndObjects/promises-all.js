export default () => {

  // Promise all, all promises have to resolve else the catch function is invoked.

  // users and products could be coming from a database but for now lets keep it simple
  const users = [
    {name : "nelson", age : 20},
    {name : "Maria", age : 33},
    {name : "Anna", age : 50}
  ];

  const products = [
    {name : "pc", price : 20},
    {name : "laptop", price : 33},
    {name : "keyboard", price : 50}
  ];

  const getUsers = new Promise(function(resolve, reject) {
    // reject("users database had a problem");
    /*
      if you uncomment the the line above all promises in Promise.all will fail
      becuse reject was called in this context
    */
    resolve(users);
  });

  const getProducts = new Promise(function(resolve, reject) {
    resolve(users);
  });

  Promise
    .all([getUsers, getProducts]).then(data => {
      // const users = data[0];
      // const products = data[1];
      const [users, products] = data; // destructuring arrays remember the above sintax looks ugly
      console.log(`users ${JSON.stringify(users, null, 2)} \n products ${JSON.stringify(products, null, 2)}`);
    })
    .catch(error => console.log(error));

};
