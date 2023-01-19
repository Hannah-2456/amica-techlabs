if (window.localStorage.getItem("registeringUser")) {
    window.location = "register.html"
} else if (!window.localStorage.getItem("currentUser")) {
    window.location = "index.html"
}

const backButton = document.getElementById("goBack")

backButton.onclick = function () {
    window.location = "home.html"
}


const currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

function createDummyMatcher() {
    const dummyUsers = []
    dummyUsers.push(currentUser)
    for (let i = 0; i < 10; i++) {
        const firstName = getRandomFromArray(firstNames)
        const lastName = getRandomFromArray(lastNames)
        const mail = firstName + "." + lastName + "@mail.com"
        const password = "password" + i

        const gender = getRandomFromArray(["female", "male", "norespond"])

        const age = Math.floor(Math.random()*82) + 18
        const interests = [...allInterests].sort(() => 0.5 - Math.random()).slice(0, 3)
        const userLocation = getRandomFromArray(allLocations)
        const num_matches = Math.ceil(Math.random()*3)
        let u = new User(firstName, lastName, mail, mail, password, gender, age, interests, userLocation, num_matches)
        dummyUsers.push(u)

    }

    const matchMaker = new MatchMaker(dummyUsers)
    window.localStorage.setItem("matchMaker", JSON.stringify(matchMaker))

}

if (!window.localStorage.getItem("matchMaker")) {
    createDummyMatcher()
}

const matchMaker = Object.setPrototypeOf(JSON.parse(window.localStorage.getItem("matchMaker")), MatchMaker.prototype)

const profileSection = document.getElementById("profileInfo")
const matchSection = document.getElementById("matches")

profileSection.innerHTML = "Name: " + currentUser.firstName + " " + currentUser.lastName + "<br/>"
profileSection.innerHTML += "Username: " + currentUser.userName + "<br/>"
profileSection.innerHTML += "Mail: " + currentUser.email + "<br/>"
profileSection.innerHTML += "Age: " + currentUser.age + "<br/>"
profileSection.innerHTML += "Gender: " + currentUser.gender + "<br/>"
profileSection.innerHTML += "Interests: " + currentUser.interests.join(", ") + "<br/>"
profileSection.innerHTML += "Location: " + currentUser.location + "<br/>"
profileSection.innerHTML += "Requested Matches: " + currentUser.num_matches + "<br/>"

matchSection.innerHTML = ""
const matches = matchMaker.matchMakingNames(currentUser)
for (let i = 0; i < currentUser.num_matches; i++) {
    const matchedUser = matches[i]
    matchSection.innerHTML += "<p>"
    matchSection.innerHTML += "Name: " + matchedUser.firstName + " " + matchedUser.lastName + "<br/>"
    matchSection.innerHTML += "Username: " + matchedUser.userName + "<br/>"
    matchSection.innerHTML += "Mail: " + matchedUser.email + "<br/>"
    matchSection.innerHTML += "Age: " + matchedUser.age + "<br/>"
    matchSection.innerHTML += "Gender: " + matchedUser.gender + "<br/>"
    matchSection.innerHTML += "Interests: " + matchedUser.interests.join(", ") + "<br/>"
    matchSection.innerHTML += "Location: " + matchedUser.location + "<br/>"
    matchSection.innerHTML += "<b>Match Score: " + matchMaker.matchMakingScores(currentUser)[i] + "</b><br/>"
    matchSection.innerHTML += "</p><hr><br/>"
}
