function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must have at least two elements.");
    }
  
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  
  // Example usage:
  const numbers = [10, 5, 8, 3, 6, 7];
  console.log(findSecondSmallest(numbers)); // Output: 5