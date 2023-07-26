function calculator(num1, operator, num2) {
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
  try {
    const num1 = 5;
    const operator = '+';
    const num2 = 3;
    const result = calculator(num1, operator, num2);
    console.log(result); 
  } catch (error) {
    console.error(error.message);
  }
  