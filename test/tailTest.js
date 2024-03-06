const assertEqual = require('../assertEqual');
const tail   = require('../tail');


// TEST CODE #1: 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// TEST CODE #2
assertEqual(tail(["test"]).length, 0) 
assertEqual(tail([]).length, 0)


// TEST CODE #3
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); 
assertEqual(tail(words).length, words.length - 1);