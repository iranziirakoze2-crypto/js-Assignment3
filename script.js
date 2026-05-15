
let totalStudents = 0;
let totalPassed = 0;
let totalFailed = 0;

function addhimorher() {
    // 1.calling everything from inputs
    const studentName = document.getElementById("student").value;
    const course1Name = document.getElementById("course1").value;
    const course1Marks = parseFloat(document.getElementById("coursemarks1").value);
    const course2Name = document.getElementById("course2").value;
    const course2Marks = parseFloat(document.getElementById("coursemarks2").value);
    if (
    course1Marks < 0 || course1Marks > 100 ||
    course2Marks < 0 || course2Marks > 100
) {
    alert("Marks must be between 0 and 100!");
    return;
}

    // checking whether user did not forget anything
    if (studentName === "" || course1Name === "" || isNaN(course1Marks) || course2Name === "" || isNaN(course2Marks)) {
        alert("please fill everything!");
        return; 
    }

    totalStudents++;

    // 2. calculating average
    const average = (course1Marks + course2Marks) / 2;

    // 3. calculating grade and status according to average
    let grade = "";
    let status = "";

    if (average >= 80) {
        grade = "A";
        status = "Pass";
    } else if (average >= 70) {
        grade = "B";
        status = "Pass";
    } else if (average >= 50) {
        grade = "C";
        status = "Pass";
    } else {
        grade = "F";
        status = "Fail";
    }




    if (status === "Pass") {
    totalPassed++;
} else {
    totalFailed++;
}

    // 4. calling `<tbody>` by using its id "tableDisplay"
    const tableDisplay = document.getElementById("tableDisplay");

    // 5. creating new line (Row) of table
    const newRow = document.createElement("tr");

    // adding new data next to each other (Columns/Cells)
    newRow.innerHTML = `
        
        <td>${studentName}</td>
        <td>${course1Name}</td>
        <td>${course2Name}</td>
        <td>${course1Marks}</td>
        <td>${course2Marks}</td>
        <td>${average.toFixed(1)}</td>
        <td>${grade}</td>
        <td>${status}</td>
    `;

    // 6. underlining in tbody
    tableDisplay.appendChild(newRow);

    // 7.preparing inputs for next student
    document.getElementById("student").value = "";
    document.getElementById("course1").value = "";
    document.getElementById("coursemarks1").value = "";
    document.getElementById("course2").value = "";
    document.getElementById("coursemarks2").value = "";

    document.getElementById("totalStudents").textContent = totalStudents;
document.getElementById("totalPassed").textContent = totalPassed;
document.getElementById("totalFailed").textContent = totalFailed;
}