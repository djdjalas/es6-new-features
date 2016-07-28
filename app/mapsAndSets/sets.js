(() => {

  /*
    Set object lets you store unique values of any type,
    whether primitive values or object references.
  */

  // adding by chaining
  let set =  new Set()
    .add(2)
    .add(4)
    .add(8)
    .add(8) // 8 is ignored as it already in set
    .add(18)
    .add(79);

  /*
    or

    let set =  new Set();
    set.add(2);
    set.add(4);
    set.add(8);
    set.add(8); // 8 is ignored as it already in set
    set.add(18);
    set.add(79);
  */

  /*
    or
    let set =  new Set([2,4,88,18,79]);

  */

  console.log(set.size)
  console.log(set.has(2));
  console.log(set.delete(2)); // returns true bcause it removed 2
  console.log(set.delete(888)); // returns false because 888 not in set
  console.log(set.has(2)); // returns false as we removed 2

  console.log("looping");
  for(let number of set){
    console.log(`Number in set > ${number}`);
  }

  // sets to array
  const array = [...set];
  console.log(array);

  // unique values from array
  const duplicatesArray = [1,1,3,3,4,5,5,6,7,7,7,8,10];
  const unique = [...new Set(duplicatesArray)];
  console.log(unique);

  console.log("lets delete all contents of set");
  set.clear();
  console.log(set);

})();
