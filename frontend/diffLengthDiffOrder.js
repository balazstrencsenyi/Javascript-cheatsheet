function comboString(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else if (b.length > a.length) {
    return a + b + a;
  } else if (b.length < 1 && a.length >= 1) {
    return a;
  } else (a.length < 1 && b.length >= 1); {
    return b;
  } 
}
