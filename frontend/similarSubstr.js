function last2(str) {
  if (str.length < 2) {
    return 0;
  }
  
  let last2 = str.substring(str.length - 2);
  let count = 0;
  
  for (let i = 0; i < str.length - 2; i++) {
    let sub = str.substring(i, i + 2);
    if (sub === last2) {
      count++;
    }
  }
  
  return count;
}
