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
  lengthpass = parseInt(prompt("Enter a lenth", "0"), 10);

  while (lengthpass < 8 || lengthpass > 128) {
    lengthpass = parseInt(prompt("Enter a length", "0"), 10);
  }

  criteria = prompt("What charactors do you want separated by (,) (uppercase,lowercase,numeric,special)").toLowerCase().split(" ");

  while (criteria === "") {
    criteria = prompt("What charactors do you want separated by ( ) (uppercase,lowercase,numeric,special)").toLowerCase().split(" ");
  }

  for (let i = 0; i < criteria.length; i++) {
    var char = i + 1
    if (criteria[i] != "uppercase" && criteria[i] != "lowercase" && criteria[i] != "numeric" && criteria[i] != "special") {
      criteria[i] = prompt("Please enter charactor " + char);
    }
  }
  for (let x = 0; x < criteria.length; x++) {

    switch (criteria[x]) {
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

  var password = "";
  for (var i = 0; i <= lengthpass; i++) {
    var randomNumber = Math.floor(Math.random() * pass.length);
    password += pass.substring(randomNumber, randomNumber + 1);
  }

  return password;

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
