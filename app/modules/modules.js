// import all functions
import * as rates from './current-interest-rates';
// lets descrtucture and get a specific function or variable
import { SAMSUNG_IR } from './current-interest-rates';
// importing from a default export
import especialAlgo from './special-algo';
//import using one export keyword
import { add } from './math';

console.log(rates.IPHONE_IR);
console.log(rates.SAMSUNG_IR);
console.log(SAMSUNG_IR);

const price = especialAlgo(5);
console.log(price);

console.log(add(4,9));
