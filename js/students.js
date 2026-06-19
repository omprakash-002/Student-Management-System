let students =
    JSON.parse(localStorage.getItem("students")) || [];

window.onload = function () {

    displayStudents(students);

};

function displayStudents(studentList) {

    let tableBody =
        document.getElementById("studentBody");

    tableBody.innerHTML = "";

    let uniqueStudents = [];
    let rollNumbers = new Set();

    studentList.forEach(function(student) {

        if (!rollNumbers.has(student.rollNo)) {

            rollNumbers.add(student.rollNo);
            uniqueStudents.push(student);
        }

    });

    uniqueStudents.forEach(function(student) {

        tableBody.innerHTML += `
        <tr>

            <td>${student.rollNo}</td>

            <td>${student.name}</td>

            <td>${student.dept}</td>

            <td>${student.email}</td>

            <td>${student.mobile}</td>

            <td>

                <button
                    onclick="updateStudent('${student.rollNo}')">
                    Update
                </button>

                <button
                    onclick="deleteStudent('${student.rollNo}')">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

function searchStudents() {

    let searchText =
        document.getElementById("searchText")
        .value
        .toLowerCase();

    let filteredStudents =
        students.filter(function(student) {

            return student.name
                .toLowerCase()
                .includes(searchText);

        });

    displayStudents(filteredStudents);

}

function sortStudents() {

    students.sort(function(a, b) {

        return a.name.localeCompare(b.name);

    });

    displayStudents(students);

}

function updateStudent(rollNo) {

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    let student =
        students.find(
            s => s.rollNo === rollNo
        );

    if (!student) {
        return;
    }

    let newName =
        prompt(
            "Enter New Name",
            student.name
        );

    if (
        newName === null ||
        newName.trim() === ""
    ) {
        return;
    }

    student.name =
        newName.trim();

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents(students);

    alert(
        "Student Updated Successfully"
    );

}

function deleteStudent(rollNo) {

    let confirmDelete =
        confirm(
            "Are you sure you want to delete this student?"
        );

    if (!confirmDelete) {
        return;
    }

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    students =
        students.filter(
            student =>
                student.rollNo !== rollNo
        );

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents(students);

    alert(
        "Student Deleted Successfully"
    );

}