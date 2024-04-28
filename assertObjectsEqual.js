const eqObjects = function (object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
          return false;
        } 
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    } 
  return true;

};

const assertObjectsEqual = function (actual, expected) {

  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

// TEST CODE
assertObjectsEqual(["Lighthouse Labs"], ["Bootcamp"]);
assertObjectsEqual([1], [1]);
assertObjectsEqual([1, 3, 5], [1, 3, 5]);
assertObjectsEqual(["Hell0 World"], ["Hello World"])