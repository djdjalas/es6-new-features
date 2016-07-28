(() =>{

  let map = new Map()
      .set("1", 1)
      .set("2", 3)
      .set("3", 4);

  /*
    or

    let map = new Map([
      [1,1],
      [2,3],
      [4,4]
    ]);

  */

  console.log(`Size ${map.size}`);

  console.log(`map has 2 ${map.has(2)}`);
  console.log(`map get value stored in key 2 > ${map.get(2)}`);

  console.log(`map has 2 ${map.has("2")}`);
  console.log(`map get map get value stored in key "2" > ${map.get("2")}`);

  // delete
  console.log(`map deletes 2 ${map.delete("2")}`);
  console.log(`map has 2 ${map.has("2")}`);
  console.log(`map get value stored in key 2 > ${map.get("2")}`);

  // lets loop
  console.log("Keys");
  for(let key of map.keys()){
      console.log(`Key - ${key}`);
  }

  console.log("Values");
  for(let value of map.values()){
      console.log(`value - ${value}`);
  }

  console.log("Entries");
  for(let entries of map.entries()){
      console.log(`Entries ${entries}`);
  }

  // lets descructure
  for(let [key, value] of map.entries()){
      console.log(`Key : ${key} - Value ${value}`);
  }

  map.forEach((value, key) => {
    console.log(`Key ${key} Value ${value} `);
  });

  console.log("add entries and keys to array");
  // add entries and keys to array
  console.log(`Entries array - ${[...map.entries()]}`)
  console.log(`Keys arrays ${[...map.keys()]}`);

  console.log("lets clear the contents in the map");
  // lets clear
  map.clear();
  console.log(map);

})();
