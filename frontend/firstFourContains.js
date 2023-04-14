function hasNine(arr) {
  for (let i = 0; i < Math.min(4, arr.length); i++) {
    if (arr[i] === 9) {
      return true;
    }
  }
   return false
}
