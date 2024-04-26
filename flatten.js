const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;

};

const flatten = function(array) {


  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      return false
    }
  }
  return true;

};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]