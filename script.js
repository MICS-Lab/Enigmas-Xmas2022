
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "cccfd8fc53f19887ebe3c5aa24270b76d0fc6760ec5de84110375a932974ab2f"
  ) {
    document.getElementById("enigma0-check").style = "display: block";
    document.getElementById("enigma0-no-check").style = "display: none";
  } else {
    document.getElementById("enigma0-no-check").style = "display: block";
    document.getElementById("enigma0-check").style = "display: none";
    document.getElementById("password0").value = "";
  }
}

checkPassword0();


function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"
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
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"
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

