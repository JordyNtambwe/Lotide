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

const letterPositions = function (sentence) {

  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (results[character]) {
        results[character].push(i)
      } else {
        results[character] = [i]
      }
    }
  }
  return results;

};

// TEST CODE
const result = letterPositions("lighthouse in the house");
assertArraysEqual(result.e, [9, 16, 22]);
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(result.g, [2]);
assertArraysEqual(result.s, [8, 21]);