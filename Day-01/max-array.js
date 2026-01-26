const maxArray = (inputArray) => {
  if (inputArray.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let max = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > max) {
      max = inputArray[i];
    }
  }

  return max;
};

module.exports = maxArray;
