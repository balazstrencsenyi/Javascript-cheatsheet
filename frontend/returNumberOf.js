function arrayCount9(nums){
  
  let count = 0
  
  for (i=0 ; i<nums.length ; i++) {
    if (nums[i]===9) { 
      count++;
  }
  }
  return count;
}