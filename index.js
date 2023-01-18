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

class User {
    // Class to create a new user
    constructor(name, age, interests, location, num_matches) {
        this.name = name;
        this.age = age;
        this.interests = interests;
        this.location = location;
        this.num_matches = num_matches;
    }

    toString() {
        return this.name;
    }
}

class MatchMaker {
    // Class that creates matches
    constructor(users) {
        this.users = users;
        this.matches = {};  // Initialize empty object to store matches
        this.score = {}; // Initialize empty object to store scores of matches
        this.calculateMatches();  // Calculate matches for all users
    }

    matchMakingNames(user) {
        if (user in this.matches) {
            return this.matches[user]; // Return the stored matches for the user
        } else {
            return [];
        }
    }

    matchMakingScores(user) {
        if (user in this.matches) {
            return this.score[user]; // Return the stored scores for the user
        } else {
            return [];
        }
    }

    calculateMatches() {
        // Loop through all users in the database
        for (let user of this.users) {
            // Initialize empty array to store matches for the current user
            let userMatches = [];
            for (let otherUser of this.users) {
                // Skip the current user
                if (otherUser === user) {
                    continue;
                }

                // Calculate match score:
                // 1. Age
                let ageDiff = Math.abs(user.age - otherUser.age);
                let ageScore;
                if (ageDiff <= 5) {
                    ageScore = 1;
                } else if (ageDiff <= 10) {
                    ageScore = 0.5;
                } else {
                    ageScore = 0;
                }
                // 2. Common Interest 
                let commonInterests = new Set([...user.interests, ...otherUser.interests]).size;

                // 3. Same Location
                let locationScore = user.location === otherUser.location ? 0.5 : 0;

                // Calculate score by addition
                let matchScore = ageScore + commonInterests + locationScore;

                // If match score is high enough, add otherUser to the matches list
                if (matchScore > 0.5) {
                    userMatches.push([otherUser, matchScore]);
                }
            }

            // Sort the matches list by score in descending order
            userMatches.sort((a, b) => b[1] - a[1]);
            this.matches[user] = userMatches.slice(0, user.num_matches).map(match => match[0]);
            this.score[user] = userMatches.slice(0, user.num_matches).map(match => match[1]);
        }
    }

       removeMatch(user, otherUser) {
        // Find the current matches for user
        if (user in this.matches) {
            let matches = this.matches[user];
            // If otherUser is in the matches list, remove it
            let index = matches.indexOf(otherUser);
            if (index !== -1) {
                matches.splice(index, 1);
                this.matches[user] = matches;

                let scores = this.score[user];
                scores.splice(index, 1);
                this.score[user] = scores;
            }
        }

        // remove the match from the other_user
        if (otherUser in this.matches) {
            let otherMatches = this.matches[otherUser];
            let index = otherMatches.indexOf(user);
            if (index !== -1) {
                otherMatches.splice(index, 1);
                this.matches[otherUser] = otherMatches;

                let otherScores = this.score[otherUser];
                otherScores.splice(index, 1);
                this.score[otherUser] = otherScores;
            }
        }
    }

    deleteAccount(user) {
        // Remove user from the users list
        let index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }

        // Remove user from the matches object
        if (user in this.matches) {
            delete this.matches[user];
        }
        if (user in this.score) {
            delete this.score[user];
        }
    }
}


