function closestToTen(a, b) {
  const aDiff = Math.abs(10 - a);
  const bDiff = Math.abs(10 - b);

  if (aDiff < bDiff) {
    return a;
  } else if (bDiff < aDiff) {
    return b;
  } else {
    return 0;
  }
}
