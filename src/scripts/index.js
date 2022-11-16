var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZaeiouAEIOUaeiouAEIOUaeiouAEIOU";
var passwordLength = 12;
function generatePassword() {
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    document.getElementById("password").value = password;
}

generatePassword()


function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}