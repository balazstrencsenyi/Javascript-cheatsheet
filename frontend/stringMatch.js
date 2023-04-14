function stringMatch(a, b){
  let count = 0
  for (i=0 ; i< Math.min(a.length, b.length)-1; i++) {
    if (a.substring(i, i+2) === b.substring(i, i+2)){
      count++}
  }
  return count
  
}