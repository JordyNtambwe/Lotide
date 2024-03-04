const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };

const countLetters = function(string) {
const result = {}

for(const items of string) {
  if(result[items]) {
    result += 1
  }
}
return result
}