const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
const keys1 = Object.keys(object1) // [colors, size]
const keys2 = Object.keys(object2) // [size, colors]

if(keys1.length !== keys2.length) { 
  return false
}

for(const key of keys1) { // key = colors, key = size
  if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    if(!eqArrays(object1[key]), object2[key]) {
      return false
    }
  }
  if(object1[key] !== object2[key]) {
  return false
  }


}
return true
}


// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false