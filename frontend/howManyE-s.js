function stringE(str){
  let count = 0 
  for ( let i = 0 ; i < str.length ; i++ ) {
    if ( str[i] === 'e'){
      count++
    }
  } 
  return (count>=1 && count<=3)
}