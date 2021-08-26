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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "?", "$"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function storeChoices() {
  var passLength = parseInt(
    window.prompt(
      "Pick a number between 8 to 128, which will respresent your password length"
    )
  );
  console.log(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("Try again. Needs to be between 8 to 128 in length");
  }
  if (Number.isNaN(passLength)) {
    alert("Try again. Needs to be an actual numeric value and not text.");
  }

  var wantLower = confirm("Do you want lowercase letters in your password?");
  var wantUpper = confirm("Do you want uppercase letters in your password?");
  var wantNumeric = confirm("Do you want numbers in your password?");
  var wantSpecial = confirm("Do you want special characters in your password?");
  console.log(wantLower);

  if (
    wantLower === false &&
    wantUpper === false &&
    wantNumeric === false &&
    wantSpecial === false
  ) {
    alert("Please include at least one of the the password conditions");
  }

  var userInput = {
    length: passLength,
    low: wantLower,
    high: wantUpper,
    special: wantSpecial,
    num: wantNumeric,
  };
  return userInput;
}

function generatePassword() {
  var userReturn = storeChoices();
  console.log(userReturn);
  //create a blank array which will hold our final password result
  var passResult = [];
  // create another blank array that will hold all our possible characters depending on the users choices
  var selectedChars = [];
  //create an if statements that will check to see if the user selected lowercase, uppercase, numbers, special (hint check the user return) an push it to the blank array that holds possible characters.
  if(userInput.low === true){
    selectChars = lowerCaseLetters;
    console.log(selectChars);
  }
  //loop through the possible characters array and push random characters into the final result

  // return the final result array as a string
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
