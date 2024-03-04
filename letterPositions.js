const assertArraysEqual = function (array1, array2) {

    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
}

const eqArrays = function (array1, array2) {

    if (!array1 || !array2) {
    return false;
    }
  
    const sameLength = array1.length === array2.length;
    if (!sameLength) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
    
  };

const letterPositions = function(sentence) {
  const results = {};

for(let i = 0; i < sentence.length; i++) {
  if(sentence[i] !== " ") {
    if(results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  }
 }
 return results

}

// TEST CODE

assertArraysEqual((letterPositions("hello").e), [1]);
assertArraysEqual((letterPositions("hello").l), [2, 3]);
assertArraysEqual((letterPositions("hello").h), [1]);