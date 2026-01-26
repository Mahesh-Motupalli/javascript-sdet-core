const countVowel = (str) => {
  if (str.length === 0) {
    throw new Error("Input cannot be empty");
  }

  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  return count;
};

module.exports = countVowel;
