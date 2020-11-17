const splitArray = require('./splitArray.js');
const { it, expect } = require('@jest/globals');

describe('splitArray', function () {

  it('should be a function', function () {
      expect(splitArray).toBeInstanceOf(Function);
  });

  it('should return an array of arrays', function () {
  const result = splitArray([1,2,3,4], 2);
  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
  expect(Array.isArray(result[0])).toBe(true);
  });

  it('should return equal length arrays with a final array of the remainder value when devised by an odd number', 
  function () {
    const test_array = [1, 2, 3, 4, 5]
    const integer = 3
    const expected = [[1, 2], [3, 4], [5]]
    expect(splitArray(test_array, integer)).toEqual(expected)
  })

  it('should return equal length arrays when devised by an even number', function () {
    const test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const integer = 6
    const expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]]
    expect(splitArray(test_array, integer)).toEqual(expected)
  })

  it('should return one array if integer is 1', function () {
    const test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const integer = 1
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]
    expect(splitArray(test_array, integer)).toEqual(expected)
  })

  it('should return an empty array if integer os 0', function () {
    const test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const integer = 0
    const expected = []
    expect(splitArray(test_array, integer)).toEqual(expected)
  })

  //tests for given array and integer

});