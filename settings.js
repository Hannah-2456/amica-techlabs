
if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
} else if (!window.localStorage.getItem("currentUser")) {
    window.location = "index.html"
}

const deleteButton = document.getElementById("deleteProfile")
const backButton = document.getElementById("goBack")

deleteButton.onclick = function () {
    window.localStorage.clear()
    window.location = "index.html"
}

backButton.onclick = function () {
    window.location = "home.html"
}
