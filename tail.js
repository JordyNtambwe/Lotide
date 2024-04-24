const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

// The tail function takes an array as a parameter and returns a new array with the first element removed.
const tail = function(array) {

  return array.slice(1);

};

// Test Case #1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case #2: Check the returned array
const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2); // returned array should have 2 elements
assertEqual(results[0], "Lighthouse"); // first element should be "Lighthouse"
assertEqual(results[1], "Labs"); // second element should be "Labs"

// Test Case #3: Check arrays with one or zero elements
assertEqual(tail(["test"]).length, 0); // array with one element should return empty array
assertEqual(tail([]).length, 0); // empty array should return empty array
