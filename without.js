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

  let newArray =  [] // This line declares a new variable, "newArray" as an empty array, where the list of filtered items with be stored
  for(let i = 0; i < source.length; i++) { // This line iterates through the "source" list
        if(!itemsToRemove.includes(source[i])) { // This line checks if any items from the "source" list is also present in the "itemsToRemove" list using the "includes" method
            newArray.push(source[i]); // This line adds the current items from the "source" list into the "newArray"
     }
    }
    return newArray
  }

//TEST CODE #1
assertArraysEqual(without([1, 2, 3], [1]), [2,3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]);

// TEST CODE #2
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);