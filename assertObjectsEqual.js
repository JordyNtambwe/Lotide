const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1) // [colors, size]
  const keys2 = Object.keys(object2) // [size, colors]
  
  if(keys1.length !== keys2.length) { 
    return false
  }
  
  for(const key of keys1) { // key = colors, key = size
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
    return false
    }
  }
  return true
  }

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
} else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

};

// TEST CODE
assertObjectsEqual(eqObjects(([1, 2, 3], [1, 2, 3])))