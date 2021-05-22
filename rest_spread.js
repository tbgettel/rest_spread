// TYLER GETTEL //
// REST SPREAD //

// refactor this 

/** function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

// into this

let filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// write function to findMin from a list of arguments

let findMin = (...nums) => nums.reduce(num => Math.min(num));

// write function to merge objects

let mergeObjects = (objOne, objTwo) => ({...objOne, ...objTwo})

// Write a function called doubleAndReturnArgs which accepts an array and a 
// variable number of arguments. The function should return a new array with 
// the original array values and all of additional arguments doubled.

let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val*2)]

/** remove a random element in the items array
and return a new array without that item. 

function removeRandom(items) {

}
*/

let removeRandom = (items) => {
  let randIndex = Math.floor(Math.random()* items.length);
  return [...items.slice(0, randIndex), ...items.slice(randIndex+1)];
}

/** Return a new array with every item in array1 and array2. 

function extend(array1, array2) {

}
*/

let extend = (array1, array2) => {
  return ([...array1, ...array2]);
}


/** Return a new object with all the keys and values
from obj and a new key/value pair 

function addKeyVal(obj, key, val) {

}
*/

let addKeyVal = (obj, key, val) => {
  return ({...obj, [key]:val})
}

const obj1 = {color : "red", height: 10, bool: true};
const obj2 = {weight: 120, iq: 100, eyecolor: "green"}


/** Return a new object with a key removed. 

function removeKey(obj, key) {

}
*/

let removeKey = (obj, key) => {
  delete obj[key]
  return {...obj}
}


/** Combine two objects and return a new object. 

function combine(obj1, obj2) {

}
*/

let combine = (obj1, obj2) => {
  return ({...obj1, ...obj2})
}

/** Return a new object with a modified key and value. 

function update(obj, key, val) {

}

*/

let update = (obj, key, val) => {
  return ({...obj, [key]:val})
}