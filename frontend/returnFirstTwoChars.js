function firstTwo(str) {
  if (str.length >= 2) {
    return str.substring(0, 2);
  } else if (str.length < 2 && str.length > 0) {
    return str;
  } else {
    return "";
  }
}