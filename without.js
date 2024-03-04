const assertArraysEqual = function (array1, array2) {

    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
};

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

const without = function(source, itemsToRemove) {

  let newArray =  []
  for(let i = 0; i < source.length; i++) {
        if(!itemsToRemove.includes(source[i])) {
            newArray.push(source[i])
     }
    }
    return newArray
  }

//Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);