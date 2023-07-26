function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    
    return null;
  }
  
  
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetSum = 9;
  const result = findTwoNumbersWithSum(inputArray, targetSum);
  console.log(result); 