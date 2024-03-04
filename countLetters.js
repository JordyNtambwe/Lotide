const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };

const countLetters = function(a, b) {
const results = {};

for(const items of a) {
  if (b[items]) {
    if(results[items]) {
      results += 1
    } else {
      results[items] = 1
    }
  }
 }
 return results
}