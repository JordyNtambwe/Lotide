const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Test Case #1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case #2: Check the returned array
const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2); 
assertEqual(results[0], "Lighthouse");
assertEqual(results[1], "Labs"); 

// Test Case #3: Check arrays with one or zero elements
assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);