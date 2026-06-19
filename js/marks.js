function calculateMarks() {

    let maths =
        Number(
            document.getElementById("maths").value
        );

    let physics =
        Number(
            document.getElementById("physics").value
        );

    let chemistry =
        Number(
            document.getElementById("chemistry").value
        );

    let english =
        Number(
            document.getElementById("english").value
        );

    let programming =
        Number(
            document.getElementById("programming").value
        );

    let errorMsg =
        document.getElementById("errorMsg");

    errorMsg.innerHTML = "";

    let marks = [
        maths,
        physics,
        chemistry,
        english,
        programming
    ];

    for (let mark of marks) {

        if (
            isNaN(mark) ||
            mark < 0 ||
            mark > 100
        ) {

            errorMsg.innerHTML =
                "Marks should be between 0 and 100";

            return;
        }
    }

    let total =
        maths +
        physics +
        chemistry +
        english +
        programming;

    let average =
        total / 5;

    let grade = "";

    if (average >= 90) {

        grade = "O";

    } else if (average >= 80) {

        grade = "A+";

    } else if (average >= 70) {

        grade = "A";

    } else if (average >= 60) {

        grade = "B+";

    } else if (average >= 50) {

        grade = "B";

    } else {

        grade = "RA";
    }

    document.getElementById(
        "totalMarks"
    ).innerHTML = total;

    document.getElementById(
        "averageMarks"
    ).innerHTML =
        average.toFixed(2);

    document.getElementById(
        "grade"
    ).innerHTML = grade;
}