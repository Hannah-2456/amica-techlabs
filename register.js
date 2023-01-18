const registerTitle = document.getElementById("registerTitle")
const submitReg = document.getElementById("submitReg")

const birthdayField = document.getElementById("birthday")
const maleChoice = document.getElementById("male")
const femaleChoice = document.getElementById("female")
const noGenderChoice = document.getElementById("norespond")

const locationSelect = document.getElementById("location")

const interestSelections = [
    "Coffee or Tea",
    "Going for walks",
    "Cooking",
    "Reading",
    "Concerts",
    "Theater",
    "Sports"
]

const oneMatchSelect = document.getElementById("n1")
const twoMatchesSelect = document.getElementById("n2")
const threeMatchesSelect = document.getElementById("n3")

if (!window.localStorage.getItem("registeringUser")) {
    window.location = "index.html"
} else if (window.localStorage.getItem("currentUser")) {
    window.location = "home.html"
}

const registeringUser = JSON.parse(window.localStorage.getItem("registeringUser"))

registerTitle.innerText = registerTitle.innerText.replace("USER", registeringUser.firstName)

function calculate_age(dob) {
    const diff_ms = Date.now() - Date.parse(dob);
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

submitReg.onclick = function () {
    registeringUser.age = calculate_age(birthdayField.value)

    if (maleChoice.checked) {
        registeringUser.gender = maleChoice.value
    } else if (femaleChoice.checked) {
        registeringUser.gender = femaleChoice.value
    } else if (noGenderChoice.checked) {
        registeringUser.gender = noGenderChoice.value
    }

    registeringUser.location = locationSelect.value
    registeringUser.interests = []
    for (const interest of interestSelections) {
        if (document.getElementById(interest).checked) {
            registeringUser.interests.push(interest)
        }
    }

    if (oneMatchSelect.checked) {
        registeringUser.num_matches = 1
    } else if (twoMatchesSelect.checked) {
        registeringUser.num_matches = 2
    } else if (threeMatchesSelect.checked) {
        registeringUser.num_matches = 3
    }

    window.localStorage.setItem("currentUser", JSON.stringify(registeringUser))
    window.localStorage.removeItem("registeringUser")
}
