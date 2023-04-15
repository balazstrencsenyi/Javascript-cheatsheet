function altChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 4< 2) {
      result += str[i];
    }
  }
  return result;
}