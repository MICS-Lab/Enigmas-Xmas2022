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
    document.getElementById("password10").value + 
    document.getElementById("password11").value;

  var sha_password = SHA256(
    password.toLowerCase().replace(/ /g, "").replace("'", "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "5cab0032ac49ecdc5ecdea8e1e3d51723248d6a00907e6a8d282082bee4c5acd"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
