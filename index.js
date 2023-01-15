let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let firstNameField = document.getElementById("firstNameField")
let lastNameField = document.getElementById("lastNameField")
let confirmPasswordField = document.getElementById("confirmPasswordField")
let title = document.getElementById("title")
let intro = document.getElementById("intro")

signinBtn.onclick = function(){
    firstNameField.style.maxHeight = "0";
    lastNameField.style.maxHeight = "0";
    confirmPasswordField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    intro.innerHTML = "Welcome to Amica";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    firstNameField.style.maxHeight = "60px";
    lastNameField.style.maxHeight = "60px";
    confirmPasswordField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    intro.innerHTML = "Join us and find new connections in your area. Create your free Amica account";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

