// This function returns the middle elements of an array. If the array has an even number of elements, it returns the two middle elements. If the array has an odd number of elements, it returns the single middle element.
const middle = function(array) {

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }

};

module.exports = middle;