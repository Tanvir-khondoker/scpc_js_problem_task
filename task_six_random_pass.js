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
  
 
  var passwordLength = 12; 
  var randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  