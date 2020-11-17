const splitArray = (array, n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    //splice array rounded to largest integer and divide length as it decreases
    result.push(array.splice(0, Math.ceil(array.length / i)))
  }
  console.log('result', result)
  return result;
}

splitArray([1, 2, 3, 4, 5], 3)

module.exports = splitArray;
