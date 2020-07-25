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
console.log(pwlength)

//reassign pwlength to x for easier use in function
  var x = parseInt(pwlength)
  console.log(x)


//prompt for uppercase letters
var uppercase = confirm("Would you like uppercase letters?")
console.log(uppercase)

//promt for lowercase letters
var lowercase = confirm("Would you like lowercase letters?")
console.log(lowercase)

//prompt for numbers
var nums = confirm("Would you like numbers?")
console.log(nums)

//prompt for special characters
var spchar = confirm("Would you like special characters?")
console.log(spchar)

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
console.log(characters)


// function random(){
//   characters.charAt(Math.floor(Math.random() * characters.length))
// }

var randomCharacters = ""

for (var i = 0; i <= x; i++){
  randomCharacters += characters.charAt(Math.floor(Math.random() * characters.length))
}


// var randomCharacters = 
// randomCharacters.repeat(pwlength)




console.log(randomCharacters)







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
