const nums = [
    2,4,5,2,1,2
];
  const k = {};
  
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    k[element] = (k[element] || 0) + 1;
  }
  
  console.log(k);