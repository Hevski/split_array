
/**
 * Returns array split into n arrays of equal sizes
 * @param array
 * @param n
 */
const splitArray = (array, n) => {
  const result = [];
  const maxGroupSize = Math.ceil(array.length / n)
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, maxGroupSize))
  }
  console.log('result', result)
  return result;
}

splitArray([1, 2, 3, 4, 5], 3);

module.exports = splitArray;
