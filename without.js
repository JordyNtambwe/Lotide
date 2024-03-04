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

  let arrayFinal =  [...source]
  for(let i = 0; i < itemsToRemove.length; i++) {
    for(let j = 0; j < source.length; j++) {
        if(itemsToRemove[i] === arrayFinal[j]) {
            arrayFinal.splice(j,1)
        }
    }
  }
return arrayFinal
}

//Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
