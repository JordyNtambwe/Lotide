const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };

const countLetters = function(string) {
  let results = {}

  for(const items of string) {
    if(items !== " ") {
      if(results[items]) {
        results[items] += 1
      } else {
        results[items] = 1
      }
    }
  }
  return results
}