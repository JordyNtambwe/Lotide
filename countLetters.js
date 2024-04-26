const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(sentence) {

  const results = {};

  for (const letters of sentence) {
    if(results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;

};

// TEST CODE
const result = countLetters("lighthouse in the house");
assertEqual(result['h'], 4);
assertEqual(result['a'], undefined);
assertEqual(result['o'], 2);