const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE #1: Check if the tail function returns an array with the correct length
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// TEST CODE #2: Check if tail returns an empty array
assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
assertEqual(tail([]).length, 0) // tail of an empty array should also be empty


// Test Case #3: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length - 1); // tail should have one element less than its input