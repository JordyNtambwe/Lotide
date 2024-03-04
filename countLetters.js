const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };

const countLetters = function(string) {
  let results = {}

  for(const letters of string) {
    if(letters !== " ") {
      if(results[letters]) {
        results[letters] += 1
      } else {
        results[letters] = 1
      }
    }
  }
  return results
}

// TEST CODES
const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);