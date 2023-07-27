//1. task one: reversing a string.
function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
    return reversedString;
  }
 
// first task's driver code

//   const input = "Hello, world!";
//   const reversed = reverseString(input);
//   console.log(reversed); 








//2. task two: sum of all positive number of an array.

function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
// second task's driver code

//   const numbersArray = [1, -2, 3, -4, 5];
//   const result = sumOfPositiveNumbers(numbersArray);
//   console.log(result); 







// 3.  task four: Return an array containing the indices of the two numbers.

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
  
//  3 No's driver code

//   const inputArray = [1, 3, 6, 8, 11, 15];
//   const targetSum = 9;
//   const result = findTwoNumbersWithSum(inputArray, targetSum);
//   console.log(result); 







// 4. task five: javascript calculator

function calculator(num1,  num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          throw new Error('Division by zero is not allowed.');
        }
      default:
        throw new Error('Invalid operator. Supported operators are +, -, *, and /.');
    }
  }
  
  // Test the calculator function
  
    // const result = calculator(30, 6, '/');
    // console.log(result); 
  


 



// 5. task 6: random password generator 
function generateRandomPassword(length) {
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";
  
    var allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
    var passwordArray = [];
  
    for (var i = 0; i < length; i++) {
      var randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
      passwordArray.push(randomChar);
    }
  
    return passwordArray.join('');
  }
  
 
//   password generator driver code

//   var passwordLength = 5; 
//   var randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);
     
  





// 6. task seven: Roman numeral to an integer.
function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentCharValue = romanNumeralsMap[romanNumeral[i]];
      const nextCharValue = romanNumeralsMap[romanNumeral[i + 1]];
  
      if (nextCharValue > currentCharValue) {
        result += nextCharValue - currentCharValue;
        i++; 
      } else {
        result += currentCharValue;
      }
    }
  
    return result;
  }
  
  // Example usage of roman to numeral:

//   console.log(romanToInteger("IX")); 
//   console.log(romanToInteger("XXI"));








// 7. task eight :finding Second Smallest in an array 
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must have at least two elements.");
    }
  
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  
  // task eight's driver code 
//   const numbers = [10, 5, 8, 3, 6, 7];
//   console.log(findSecondSmallest(numbers)); 
  