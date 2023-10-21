// email-js
(function () {
  emailjs.init("user_psmJyCBE8dO24j7rVi9VX");
})();

function validate() {
  // let loader = document.querySelector(".loader");
  let name = document.querySelector(".username");
  let email = document.querySelector(".email");
  let num = document.querySelector(".number");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      name.value == "" ||
      email.value == "" ||
      num.value == "" ||
      msg.value == ""
    ) {
      emptyerror();
    } else {
      // loader.style.display = "flex";
      sendmail(name.value, email.value, num.value, msg.value);
      success();
      // loader.style.display = "none";
    }
  });
}
validate();

function sendmail(name, email, num, msg) {
  emailjs.send("service_lz53fqh", "template_vinpa82", {
    to_name: "your recipient name",
    from_name: email,
    user: name,
    mail: email,
    phone: num,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Fields cannot be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Success...",
    text: "Successfully sent message",
  });
}
