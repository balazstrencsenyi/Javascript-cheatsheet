function noTriples(nums){
  for ( let i = 0 ; i < nums.length-1 ; i++ ) {
    if ( (nums[i] === nums[i+1])&& (nums[i+1]=== nums[i+2])) {
        return false}
  }
    return true
 }