const signupBtn = document.getElementById("signupBtn")
const firstNameField = document.getElementById("firstNameField")
const lastNameField = document.getElementById("lastNameField")
const userNameField = document.getElementById("nameField")
const emailField = document.getElementById("emailField")
const passwordField = document.getElementById("passwordField")

signupBtn.onclick = function () {
    window.localStorage.clear()
    const user = new User(firstNameField.value, lastNameField.value, userNameField.value, emailField.value, passwordField.value)
    window.localStorage.setItem("registeringUser", JSON.stringify(user))
}

//Redirect logged-in users
if (window.localStorage.getItem("currentUser")) {
    window.location = "home.html"
} else if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
}
