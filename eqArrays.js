const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if(array1[i] === array2[i]) {
      return true
    } else {
      return false
    }
  }

};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([10, 40, 25], [10, "40", 25]), false)