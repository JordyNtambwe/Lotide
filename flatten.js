const flatten = function(array) {

  const results = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      results.push(...array[i])
    } else {
      results.push(array[i])
    }
  }
  return results;

};

module.exports = flatten;