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

const assertArraysEqual = function (array1, array2) {

    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
}
// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]))
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]))
assertArraysEqual(eqArrays([], []))
assertArraysEqual(eqArrays(["test", "123"], ["test", "123"]))
assertArraysEqual(eqArrays(["test", "123"], ["tes", "123"]))