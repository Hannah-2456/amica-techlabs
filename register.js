const detailsForm = document.getElementById("detailsForm");
detailsForm.addEventListener('submit', editUser);


function editUser(event) {
    event.preventDefault();

    var objectUser = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));

    let birthday = document.getElementById("birthday").value;
    objectUser['birthday'] = birthday;

    let gender = document.querySelector('input[name="gender"]:checked').value;
    objectUser['gender'] = gender;

    let location = document.getElementById("location").value;
    objectUser['location'] = location;

    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    var allInterests = [];
    for (var checkbox of markedCheckbox) {
        allInterests.push(checkbox.value);
        }
    objectUser['interests'] = allInterests;

    let numberOfMatches = document.querySelector('input[name="num_matches"]:checked').value;
    objectUser['number of matches'] = numberOfMatches;

    localStorage.setItem(objectUser.userName, JSON.stringify(objectUser));
    window.location.href = "home.html";
}