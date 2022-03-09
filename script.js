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
  var y = prompt("What charactors do you want separated by (,) (uppercase,lowercase,numeric,special)").toLowerCase().split(" ");

  while (y === "") {
    y = prompt("What charactors do you want separated by ( ) (uppercase,lowercase,numeric,special)").toLowerCase().split(" ");
  }
  console.log(y[0])
  for (let x = 0; x < y.length; x++) {

    switch (y[x]) {
      case "uppercase":
        pass += upperCase;
        break;
      case "lowercase":
        pass += lowerCase
        break;
      case "numeric":
        pass += numbers;
        break;
      case "special":
        pass += symbols;
        break;
      default:
        break;
    }
  }
return pass;
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
