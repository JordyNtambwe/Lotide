const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;

};

// The 'middle' function takes an array and returns an array containing the middle elements of the input array
const middle = function(array) {

// If the array has less than 3 elements, there is no 'middle' element(s), so return an empty array
  if (array.length <= 2) {
    return [];
  }

// If the array length is even, return the two middle elements
// If the array length is odd, return the single middle element
  if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }

};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);