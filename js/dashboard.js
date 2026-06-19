window.onload = function () {

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    document.getElementById("totalStudents").innerHTML =
        students.length;

    let eceCount = 0;
    let cseCount = 0;
    let eeeCount = 0;

    students.forEach(function(student) {

        if (student.dept === "ECE") {
            eceCount++;
        }
        else if (student.dept === "CSE") {
            cseCount++;
        }
        else if (student.dept === "EEE") {
            eeeCount++;
        }

    });

    document.getElementById("eceCount").innerHTML =
        eceCount;

    document.getElementById("cseCount").innerHTML =
        cseCount;

    document.getElementById("eeeCount").innerHTML =
        eeeCount;

    let loggedInUser =
        localStorage.getItem("loggedInUser");

    if (loggedInUser) {

        document.getElementById("loggedInUser").innerHTML =
            loggedInUser;
    }

};

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";

}