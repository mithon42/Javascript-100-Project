let password = document.getElementById("password");
let message = document.getElementById("message");
let strenght = document.getElementById("strenght");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (password.value.length < 4) {
    strenght.innerHTML = "weak";
    message.style.color = "#ff5925";
    password.style.backgroundColor = "#ff5925";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strenght.innerHTML = "medium";
    message.style.color = "yellow";
    password.style.backgroundColor = "yellow";
  } else if (password.value.length >= 8) {
    strenght.innerHTML = "strong";
    message.style.color = "#26d738";
    password.style.backgroundColor = "#26d738";
  }
});
