
function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password);
  if (
    sha_password ==
    "8b7df143d91c716ecfa5fc1730022f6b421b05cedee8fd52b1fc65a96030ad52"
  ) {
    document.getElementById("enigma1-check").style = "display: block";
    document.getElementById("enigma1-no-check").style = "display: none";
  } else {
    document.getElementById("enigma1-no-check").style = "display: block";
    document.getElementById("enigma1-check").style = "display: none";
    document.getElementById("password1").value = "";
  }
}

checkPassword1();


function checkPassword2() {
  var password = document.getElementById("password2").value;
  var sha_password = SHA256(password);
  if (
    sha_password ==
    "b00c935bfca0df33d60ffbc391ecfd2a9dd7be9366079f54940d947443e2fe04"
  ) {
    document.getElementById("enigma2-check").style = "display: block";
    document.getElementById("enigma2-no-check").style = "display: none";
  } else {
    document.getElementById("enigma2-no-check").style = "display: block";
    document.getElementById("enigma2-check").style = "display: none";
    document.getElementById("password2").value = "";
  }
}

checkPassword2();

