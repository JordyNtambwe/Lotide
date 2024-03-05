const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const findKeyByValue = function(object, value) {
 
for(const key in object) {
   if(object[key] === value) {
     return key
   }
  }
}

// Or

// const objectKeys = Object.keys(object)

// for(const key of objectKeys) {
//   if(object[key] === value) {
//     return key
//   }
//  }
// }

// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);