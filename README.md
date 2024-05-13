# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ntambwe.j/lotide`

**Require it:**

`const _ = require('@ntambwe.j/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertArraysEqual(...): If two arrays are equal!
- assertEqual(...): If two values are equal!
- assertObjectsEqual: If two objects are equal!
- countLetters(...): Returns counts of each letter of a string!
- countOnly(...): Takes items and returns the counts for a specific subset of those items!
- eqArrays(...): Compares two arrays!
- eqObjects(...): Compares two objects!
- findKey(...): Scans the object and returns the first key for which the callback returns a truthy value!
- findKeyByValue(...): Searches for a key on an object where its value matches a given value!
- flatten(...): Flattens an array of arrays into a single-level array
- head(...): Retrieves the first element from the array!
- index(...): List of all the functions in an object!
- letterPositions(...): Returns all the indices in the string where each character is found!
- map(...): Creates a new array with the results of calling a provided function on every element in the calling array!
- middle(...): Returns the middle element of an array!
- tall(...): Retrieves every element except for the first element of the array!
- takeUntil(...): Returns a slice of the array with elements taken from the beginning!
- without(...): Removes elements from an array!