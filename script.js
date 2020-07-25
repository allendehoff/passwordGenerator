// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//prompt for password length
var pwlength = prompt("How many characters would you like your new password to be? Pick a number 8 - 128.")
console.log(pwlength)


//reassign pwlength to x for easier use in function
var x = parseInt(pwlength)
console.log(x)

//checks to make sure user selected a valid password length and break script if they did not
if (x === NaN || x < 8 || x > 128){
  alert("Your password needs to be 8 - 128 charaters. Please select OK and press the 'Generate Password' button again.")
}
//runs script if user did select a valid password length
else {
//prompt for uppercase letters
var uppercase = confirm("Would you like uppercase letters?")
// console.log(uppercase)
//promt for lowercase letters
var lowercase = confirm("Would you like lowercase letters?")
// console.log(lowercase)
//prompt for numbers
var nums = confirm("Would you like numbers?")
// console.log(nums)
//prompt for special characters
var spchar = confirm("Would you like special characters?")
// console.log(spchar)
//establishes variable to store selected characters
var characters = "";
//if user selects uppercase letters, adds uppercase letters to characters variable
if(uppercase === true){
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
//if user selects lowercase letters, adds lowercase letter to characters variable
if(lowercase === true){
  characters += "abcdefghijklmnopqrstuvwxyz"
}
//if user selects numbers, adds numbers to characters variable
if(nums === true){
  characters += "0123456789"
}
//if uer selects special characters, adds special characters to characters variable
if(spchar === true){
  characters +=  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}
// console.log(characters)
//establish variable to store random characters
var randomCharacters = ""
//loop that generates random characters from characters variable the number of times selected by the user
for (var i = 0; i < x; i++){
  randomCharacters += characters.charAt(Math.floor(Math.random() * characters.length))
}
// console.log(randomCharacters)
// return result to the html text area for password
  var passwordText = document.querySelector("#password");

  passwordText.value = randomCharacters;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
