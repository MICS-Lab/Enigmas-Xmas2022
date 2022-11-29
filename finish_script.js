function final_code() {
  var password =
    document.getElementById("password0").value + 
    document.getElementById("password1").value + 
    document.getElementById("password2").value + 
    document.getElementById("password3").value + 
    document.getElementById("password4").value + 
    document.getElementById("password5").value + 
    document.getElementById("password6").value + 
    document.getElementById("password7").value + 
    document.getElementById("password8").value + 
    document.getElementById("password9").value + 
    document.getElementById("password10").value;

  var sha_password = SHA256(
    password.toLowerCase().replace(/ /g, "").replace("'", "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "f2ce47ae929e9a00570c6473e571b7cad1865b362db6bbd0ed523347d9cb003a"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
