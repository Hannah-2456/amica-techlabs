class User {
    // Class to create a new user
    constructor(firstName, lastName, userName, email, password, gender, age, interests, location, num_matches) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.interests = interests;
        this.location = location;
        this.num_matches = num_matches;
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
        if (user.userName in this.matches) {
            return this.matches[user.userName]; // Return the stored matches for the user
        } else {
            return [];
        }
    }

    matchMakingScores(user) {
        if (user.userName in this.matches) {
            return this.score[user.userName]; // Return the stored scores for the user
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
                if (otherUser.userName === user.userName) {
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

                userMatches.push([otherUser, matchScore]);
            }

            // Sort the matches list by score in descending order
            userMatches.sort((a, b) => b[1] - a[1]);
            this.matches[user.userName] = Object.assign({}, userMatches.slice(0, user.num_matches).map(match => match[0]));
            this.score[user.userName] = Object.assign({}, userMatches.slice(0, user.num_matches).map(match => match[1]));
        }
    }
}

function getRandomFromArray(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const firstNames = [
    "Chandler",
    "Jaydin",
    "Mila",
    "Marisa",
    "Shea",
    "Toby",
    "Jaron",
    "Scarlett",
    "Maliyah",
    "Micheal",
    "Vance",
    "Jonah",
    "Alessandra",
    "Ella",
    "Mercedes",
    "Theresa",
    "Aryanna",
    "Anabelle",
    "Lucian",
    "Lillianna",
    "Mireya",
    "Korbin",
    "Leilani",
    "Tanya",
    "Ayden",
    "Laurel",
    "William",
    "Manuel",
    "Cristal",
    "Maurice"
]

const lastNames = [
    "Woodard",
    "Dodson",
    "Mayo",
    "Cummings",
    "Gray",
    "Morgan",
    "Graves",
    "Mack",
    "Stark",
    "Hartman",
    "West",
    "Brooks",
    "Trevino",
    "Newman",
    "Shea",
    "Ayers",
    "Ashley",
    "Ford",
    "Kaufman",
    "Perkins",
    "Lambert",
    "Roth",
    "Griffin",
    "Montes",
    "Hunt",
    "Tate",
    "Avery",
    "Wallace",
    "Walker",
    "Prince"
]

const allInterests = [
    "Coffee or Tea",
    "Going for walks",
    "Cooking",
    "Reading",
    "Concerts",
    "Theater",
    "Sports"
]

const allLocations = [
    "Indre By",
    "Vesterbro",
    "Nørrebro",
    "Østerbro",
    "Amager Øst",
    "Amager Vest",
    "Valby",
    "Bispebjerg", 
    "Vanløse",
    "Brønshøj-Husum"
]
