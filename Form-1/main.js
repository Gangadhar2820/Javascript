let form = document.getElementById("form");

let usernameElement = document.getElementById("uname");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let cpasswordElement = document.getElementById("cpassword");
let TandCElement = document.getElementById("TandC");

let validates = new Object();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Validate();
});

function Validate() {
  let username = usernameElement.value.trim();
  // console.log(username)
  let email = emailElement.value.trim();
  // console.log(email)
  let password = passwordElement.value.trim();
  // console.log(password)
  let cpassword = cpasswordElement.value.trim();
  // console.log(cpassword)
  let TandC = TandCElement.checked;
  // console.log(TandC)

  validates.username = false;
  validates.email = false;
  validates.password = false;
  validates.cpassword = false;
  validates.TandC = false;

  // Username Validation
  {
    let parent = usernameElement.parentElement;
    let small = parent.querySelector("small");
    let ErrorSpan = parent.querySelector("#error");
    let SuccessSpan = parent.querySelector("#success");

    if (username === "") {
      small.innerText = "Username cannot be empty";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      usernameElement.classList.add("error");
      usernameElement.classList.remove("success");
    } else if (username.length < 3) {
      small.innerText = "Username must contain atleast 3 characters";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      usernameElement.classList.add("error");
      usernameElement.classList.remove("success");
    } else {
      small.innerText = "";
      small.classList.remove("error");
      small.classList.add("success");
      ErrorSpan.classList.remove("error");
      SuccessSpan.classList.add("success");
      usernameElement.classList.remove("error");
      usernameElement.classList.add("success");
      validates.username = true;
    }
  }

  // Email Validation
  {
    let parent = emailElement.parentElement;
    let small = parent.querySelector("small");
    let ErrorSpan = parent.querySelector("#error");
    let SuccessSpan = parent.querySelector("#success");

    if (email === "") {
      small.innerText = "Email cannot be empty";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      emailElement.classList.add("error");
      emailElement.classList.remove("success");
    } else if (!emailValidate(email)) {
      small.innerText = "Invalid Email format";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      emailElement.classList.add("error");
      emailElement.classList.remove("success");
    } else {
      small.innerText = "";
      small.classList.remove("error");
      small.classList.add("success");
      ErrorSpan.classList.remove("error");
      SuccessSpan.classList.add("success");
      emailElement.classList.remove("error");
      emailElement.classList.add("success");
      validates.email = true;
    }

    function emailValidate(email) {
      let regEmail = /^[a-z0-9A-Z_]+@[a-zA-Z]+\.[a-z]{2,}$/;
      return regEmail.test(email);
    }
  }

  // password Validation
  {
    let parent = passwordElement.parentElement;
    let small = parent.querySelector("small");
    let ErrorSpan = parent.querySelector("#error");
    let SuccessSpan = parent.querySelector("#success");

    if (password === "") {
      small.innerText = "Password cannot be empty";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      passwordElement.classList.add("error");
      passwordElement.classList.remove("success");
    } else {
      small.innerText = "";
      small.classList.remove("error");
      small.classList.add("success");
      ErrorSpan.classList.remove("error");
      SuccessSpan.classList.add("success");
      passwordElement.classList.remove("error");
      passwordElement.classList.add("success");
      validates.password = true;
    }
  }

  // Confirm Password Validation
  {
    let parent = cpasswordElement.parentElement;
    let small = parent.querySelector("small");
    let ErrorSpan = parent.querySelector("#error");
    let SuccessSpan = parent.querySelector("#success");

    if (cpassword === "") {
      small.innerText = "Confirm Password cannot be empty";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      cpasswordElement.classList.add("error");
      cpasswordElement.classList.remove("success");
    } else if (cpassword !== password) {
      small.innerText = "Confirm password doesn't match password";
      small.classList.remove("success");
      small.classList.add("error");
      ErrorSpan.classList.add("error");
      SuccessSpan.classList.remove("success");
      cpasswordElement.classList.add("error");
      cpasswordElement.classList.remove("success");
    } else {
      small.innerText = "";
      small.classList.remove("error");
      small.classList.add("success");
      ErrorSpan.classList.remove("error");
      SuccessSpan.classList.add("success");
      cpasswordElement.classList.remove("error");
      cpasswordElement.classList.add("success");
      validates.cpassword = true;
    }
  }

  // Terms and Conditions Validation
  {
    let parent = TandCElement.parentElement;
    let small = parent.querySelector("small");

    if (TandC) {
      small.innerText = "";
      small.classList.add("success");
      small.classList.remove("error");
      validates.TandC = true;
    } else {
      small.innerText = "Please check Terms and Conditions";
      small.classList.remove("success");
      small.classList.add("error");
    }
  }
  let move = true;
  for (let i in validates) {
    if (!validates[i]) move = false;
  }
  if (move) form.submit();
}
