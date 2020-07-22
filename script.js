// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompt for password length
var pwlength = prompt("How many characters would you like your new password to be? Pick a number 8 - 128.")
//prompt for uppercase letters
var uppercase = confirm("Would you like uppercase letters?")
//promt for lowercase letters
var lowercase = confirm("Would you like lowercase letters?")
//prompt for numbers
var nums = confirm("Would you like numbers?")
//prompt for special characters
var spchar = confirm("Would you like special characters?")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
