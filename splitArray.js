const splitArray = (array, n) => {
  const result = [];
  const maxGroupSize = Math.ceil(array.length / n)
  console.log(maxGroupSize)
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, maxGroupSize))
  }
  console.log('result', result)
  return result;
}

splitArray([1, 2, 3, 4, 5, 6, 7, 8], 6);

module.exports = splitArray;
