const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

// // TEST CODE #1: 
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// // TEST CODE #2
// assertEqual(tail(["test"]).length, 0) 
// assertEqual(tail([]).length, 0)


// // TEST CODE #3
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3); 
<<<<<<< HEAD
// assertEqual(tail(words).length, words.length - 1);
=======
// assertEqual(tail(words).length, words.length - 1);
>>>>>>> aafe260c2909f5bee1a73880799d00f9b9531419
