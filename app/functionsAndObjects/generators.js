export default () => {

console.log("nelson");
  /*

    they are functions that can be paused by using the yield keyword

  */

  function* testingGen(){
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = testingGen();
  const number = gen.next().value;
  console.log(number);

  function* getNames(array) {
    for (var i = 0; i < array.length; i++) {
      yield array[i]
    }
  }

  var names = getNames(["nelson", "aisha", "mario", "marcos"]);

  var interval = setInterval(function () {

    const name = names.next();
    if(name.done){
      clearInterval(interval);
    }else{
      console.log(name.value);
    }

  }, 1000);

};
