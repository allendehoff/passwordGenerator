// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //prompt for password length
  // var pwlength = 
  // console.log(pwlength)

  //reassign pwlength to x for easier use in function
  var pwlength = parseInt(prompt("How many characters would you like your new password to be? Pick a number 8 - 128."))
  // console.log(x)

  //checks to make sure user selected a valid password length and break script if they did not
  if (pwlength === NaN || pwlength < 8 || pwlength > 128) {
    alert("Your password needs to be 8 - 128 charaters. Please select OK and press the 'Generate Password' button again.")
    return;
  }
  //runs script if user did select a valid password length

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

  // if(!(uppercase || lowercase || nums || spchar))
  if (!uppercase && !lowercase && !nums && !spchar) {
    return;
  }

  //establish variable to store random characters
  var randomCharacters = ""
  //establishes variable to store selected characters
  var characters = "";

  //if user selects uppercase letters, adds uppercase letters to characters variable
  if (uppercase) {
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    characters += uppers
    randomCharacters += getChar(uppers)
  }

  //if user selects lowercase letters, adds lowercase letter to characters variable
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

  //if user selects numbers, adds numbers to characters variable
  if (nums) {
    characters += "0123456789"
  }

  //if uer selects special characters, adds special characters to characters variable
  if (spchar) {
    characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  // console.log(characters)


  //loop that generates random characters from characters variable the number of times selected by the user
  for (var i = randomCharacters.length; i < pwlength; i++) {
    randomCharacters += getChar(characters)
  }
  // console.log(randomCharacters)

  // creates variable targeting text area for password
  var passwordText = document.querySelector("#password");

  //return result to the html text area for password
  passwordText.value = randomCharacters;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getChar(str) {
  return str[getRandIndex(str)]
  // return str.charAt(Math.floor(Math.random() * str.length))
}

function getRandIndex(str) {
  return Math.floor(Math.random() * str.length)
}

function shuffle(str) {
  str = str.split("")

  // 01234
  // i:0 === 0 ri:3 === 3
  // 31204
  // i:1 === 1 ri:4 === 4
  // 34201
  // i:2 === 2 ri:2 === 2
  // 34201
  // i:3 === 0 ri:1 === 4
  // 43201
  // i:4 === 1 ri:0 === 4
  // 13204

  for (var i = 0; i < str.length; i++) {
    var randIndex = getRandIndex(str)

    var temp1 = str[i]
    var temp2 = str[randIndex]

    str[randIndex] = temp2
    str[i] = temp1
  }

  return str.join("")
}