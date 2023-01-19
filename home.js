
if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
} else if (!window.localStorage.getItem("currentUser")) {
    window.location = "index.html"
}

const homeTitle = document.getElementById("homeTitle")
const currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

const settingsButton = document.getElementById("settings")
const editProfileButton = document.getElementById("editProfile")
const matchesButton = document.getElementById("matches")

homeTitle.innerText = homeTitle.innerText.replace("USER", currentUser.firstName + " " + currentUser.lastName)

settingsButton.onclick = function () {
    window.location = "settings.html"
}

editProfileButton.onclick = function () {
    window.alert("Not implemented yet.")
}

matchesButton.onclick = function () {
    window.location = "match.html"
}
