
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "9e518a9c188fac25d4432e353ce4ea417fba1e74ada99d60bacc21c534d567f5"
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


function checkPassword3() {
  var password = document.getElementById("password3").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "54acfadf2c86190a1db8e2ac5d0506ae66dd3fe794068e87c6df53fc5370fc31"
  ) {
    document.getElementById("enigma3-check").style = "display: block";
    document.getElementById("enigma3-no-check").style = "display: none";
  } else {
    document.getElementById("enigma3-no-check").style = "display: block";
    document.getElementById("enigma3-check").style = "display: none";
    document.getElementById("password3").value = "";
  }
}

checkPassword3();


function checkPassword4() {
  var password = document.getElementById("password4").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "81a83544cf93c245178cbc1620030f1123f435af867c79d87135983c52ab39d9"
  ) {
    document.getElementById("enigma4-check").style = "display: block";
    document.getElementById("enigma4-no-check").style = "display: none";
  } else {
    document.getElementById("enigma4-no-check").style = "display: block";
    document.getElementById("enigma4-check").style = "display: none";
    document.getElementById("password4").value = "";
  }
}

checkPassword4();


function checkPassword5() {
  var password = document.getElementById("password5").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"
  ) {
    document.getElementById("enigma5-check").style = "display: block";
    document.getElementById("enigma5-no-check").style = "display: none";
  } else {
    document.getElementById("enigma5-no-check").style = "display: block";
    document.getElementById("enigma5-check").style = "display: none";
    document.getElementById("password5").value = "";
  }
}

checkPassword5();


function checkPassword6() {
  var password = document.getElementById("password6").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"
  ) {
    document.getElementById("enigma6-check").style = "display: block";
    document.getElementById("enigma6-no-check").style = "display: none";
  } else {
    document.getElementById("enigma6-no-check").style = "display: block";
    document.getElementById("enigma6-check").style = "display: none";
    document.getElementById("password6").value = "";
  }
}

checkPassword6();


function checkPassword7() {
  var password = document.getElementById("password7").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a"
  ) {
    document.getElementById("enigma7-check").style = "display: block";
    document.getElementById("enigma7-no-check").style = "display: none";
  } else {
    document.getElementById("enigma7-no-check").style = "display: block";
    document.getElementById("enigma7-check").style = "display: none";
    document.getElementById("password7").value = "";
  }
}

checkPassword7();


function checkPassword8() {
  var password = document.getElementById("password8").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "3cb968a982080be1d7a5df98dc49673a8c052d2642ef7730b7753cee5b87c3dd"
  ) {
    document.getElementById("enigma8-check").style = "display: block";
    document.getElementById("enigma8-no-check").style = "display: none";
  } else {
    document.getElementById("enigma8-no-check").style = "display: block";
    document.getElementById("enigma8-check").style = "display: none";
    document.getElementById("password8").value = "";
  }
}

checkPassword8();


function checkPassword9() {
  var password = document.getElementById("password9").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "fabb8fa5aa1bf3e667e208cf1967ee0e9ce8d1af2897b6a576174130aa2130fe"
  ) {
    document.getElementById("enigma9-check").style = "display: block";
    document.getElementById("enigma9-no-check").style = "display: none";
  } else {
    document.getElementById("enigma9-no-check").style = "display: block";
    document.getElementById("enigma9-check").style = "display: none";
    document.getElementById("password9").value = "";
  }
}

checkPassword9();

