const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(items) {

  const results = {};

  for (const item of items) {
    if(results[item]) {
      return results[item] += 1
    }
  }

};