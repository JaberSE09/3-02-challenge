// Assignment code here
function generatePassword() {
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthpass = "";
  var criteria = "";
  var pass = "";

  //create the length
  var x = parseInt(prompt("Enter a lenth", "0"), 10);

  while (x < 8 || x > 128) {
    x = parseInt(prompt("Enter a length", "0"), 10);
  }



  return x;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
