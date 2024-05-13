const without = function(source, itemsToRemove) {

  let results = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      results.push(source[i]);
  }
 }
 return results;

};

module.exports = without;