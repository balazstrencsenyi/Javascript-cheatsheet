function doubleX(str) {
  let index = str.indexOf('x');
  if (index == -1) { // if there's no 'x' in the string
    return false;
  }
   return str.charAt(index + 1) == 'x'; 
}