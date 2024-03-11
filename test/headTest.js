const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
<<<<<<< HEAD
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns Hello for ['5']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
=======
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
>>>>>>> aafe260c2909f5bee1a73880799d00f9b9531419
  });
});

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
<<<<<<< HEAD
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
=======
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
>>>>>>> aafe260c2909f5bee1a73880799d00f9b9531419
