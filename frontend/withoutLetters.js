function removeX(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" && (i !== 0 && i !== str.length - 1)) {
      continue; // skip x unless it's the first or last character
    }
    result += str[i];
  }
  return result;
}

