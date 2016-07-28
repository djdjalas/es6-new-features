export default () => {

  /*
    A Promise represents an operation that hasn't completed yet, but is expected in the future.
  */

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My value");
    }, 2000);

    setTimeout(() => {
      reject("error");
    }, 3000);
  })

  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })

    /*
      the catch block will be invoked first as the it times out first in the promise above.
      change the reject timeout to a bigger value then you will set that then will be called
    */

};
