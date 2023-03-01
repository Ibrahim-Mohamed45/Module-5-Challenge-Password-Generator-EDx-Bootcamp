// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#',
  '$', '^', '?', ':', ',', ')', '(', '}',
  '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Globally scoped the variables so they can be used in multiple functions.
var characters
var lowercasechar
var uppercasechar
var numericchar
var specialchar

// Function to prompt user for password options
function getPasswordOptions() {

  while (true) {
    characters = prompt("How many characters do you want for your password??");

    // Creates a condition to ensure the number entered by the user fits within the specified range.
    if (characters >= 10 && characters <= 64) {
      break
    }
    // Alerts the user that the number they have entered isn't within the specified range.
    alert("Your password needs to be at least 10 characters but no more than 64. Please try again.");
  }


  while (true) {
    lowercasechar = confirm("Click OK if you would like lowercase characters in your password, otherwise press cancel.");
    uppercasechar = confirm("Click OK if you would like uppercase characters in your password, otherwise press cancel.");
    numericchar = confirm("Click OK if you would like numeric characters in your password, otherwise press cancel.");
    specialchar = confirm("Click OK if you would like special characters in your password, otherwise press cancel.");

    // Creates a condition for each input so that at least one character type is selected.
    if (lowercasechar == true || uppercasechar == true || numericchar == true || specialchar == true) {
      break
    }
    // Alerts the user that they haven't selected a character type.
    alert("A minimum of one character type has to be selected. Please try again.")
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const element = arr[Math.floor(Math.random() * arr.length)];
  return element;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

  let password = "";

  while (password.length <= characters) {

    if (lowercasechar == true) {
      password += getRandom(lowerCasedCharacters);
    }
    if (uppercasechar == true) {
      password += getRandom(upperCasedCharacters);
    }
    if (numericchar == true) {
      password += getRandom(numericCharacters);
    }
    if (specialchar == true) {
      password += getRandom(specialCharacters);
    }
  }

  if (password.length > characters) {
    password = password.slice(0, characters);
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);