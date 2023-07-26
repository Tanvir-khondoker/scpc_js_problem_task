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
  
  // Example usage:
  console.log(romanToInteger("IX")); 
  console.log(romanToInteger("XXI"));
  
  