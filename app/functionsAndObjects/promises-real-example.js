export default () => {
  /*
    real world example
    list of public apis for free https://github.com/toddmotto/public-apis
    lets use this one for random jokes : http://www.icndb.com/api/
    the endpoint for number of random jokes is http://api.icndb.com/jokes/random/3 3 is the number os jokes returned
  */

  // fetch returns a promisse so we can use then
  fetch("http://api.icndb.com/jokes/random/3").then((res) => {
    // there is a json() and it also returns a promisse so we can use then
    res.json().then(data => {
      // lets descruct jokes from value
      const { value : jokes } = data;
      // lets loop through jokes obj and get the joke from each object
      jokes.forEach(joke => {
        console.log(joke.joke)
      });
    });
  })

};
