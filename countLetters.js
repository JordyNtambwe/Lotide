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

// TEST CODES #1
const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

// TEST CODES #2
const result2 = countLetters('');
assertEqual(Object.keys(result2).length, 0);

// TEST CODES #3
const result3 = countLetters('   ');
assertEqual(Object.keys(result3).length, 0);