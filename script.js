// Assignment code here
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "?", "$"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Above, this will return this HTML button element with the generate ID
// This is the what gets returned : <button id="generate" class="btn">Generate Password</button>

function storeChoices() {
  var passLength = parseInt(
    window.prompt(
      "Pick a number between 8 to 128, which will respresent your password length"
    )
  );

  if (passLength < 8 || passLength > 128) {
    alert("Try again. Needs to be between 8 to 128 in length");
  }
  if (Number.isNaN(passLength)) {
    alert("Try again. Needs to be an actual numeric value and not text.");
  }

  // This returns a number the user enters and makes sure of that with the validation

  var wantLower = confirm("Do you want lowercase letters in your password?");
  var wantUpper = confirm("Do you want uppercase letters in your password?");
  var wantNumeric = confirm("Do you want numbers in your password?");
  var wantSpecial = confirm("Do you want special characters in your password?");

  // All of these variables above return a boolean value which is stored is the respective variables.

  if (
    wantLower === false &&
    wantUpper === false &&
    wantNumeric === false &&
    wantSpecial === false
  ) {
    alert("Please include at least one of the the password conditions");
  }

  // Above, this is a validation to ensure the user actually picked at least one of the criteria

  var userInput = {
    length: passLength,
    low: wantLower,
    high: wantUpper,
    special: wantSpecial,
    num: wantNumeric,
  };
  return userInput;
  // Above, we are storying all of the user selected values into 1 object called UserInput
}

function generatePassword() {
  var userReturn = storeChoices();
  console.log(userReturn);
  // Above, we are calling the storeChoices function to get the user selected values from the userReturn object.

  //create a blank array which will hold our final password result
  var passResult = "";
  // create another blank array that will hold all our possible characters depending on the users choices
  var selectedChars = [];
  //create an if statements that will check to see if the user selected lowercase, uppercase, numbers, special (hint check the user return) an push it to the blank array that holds possible characters.
  if (userReturn.low === true) {
    selectedChars = lowerCaseLetters;
    console.log(selectedChars);
  }

  if (userReturn.high === true) {
    selectedChars = selectedChars.concat(upperCaseLetters);
    console.log(selectedChars);
  }

  //Question, how do I get the return into a proper array so i can loop through it?

  if (userReturn.num === true) {
    selectedChars = selectedChars.concat(numbers);
    console.log(selectedChars);
  }

  if (userReturn.special === true) {
    selectedChars = selectedChars.concat(specialChar);
    console.log(selectedChars);
  }
console.log(userReturn.length);
  for (var i = 0; i < userReturn.length; i++) {
    passResult += selectedChars[(Math.floor(Math.random() * selectedChars.length))];
    // Above, get a random value from the returned character from the selectedCharacter array and store it into passResult array.
  }

  return passResult;

  // Above, return the final result array as a string. Convert passResult array into a string.
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
