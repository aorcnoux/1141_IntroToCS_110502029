let mathInput       = document.getElementById("mathInput");
let englishInput    = document.getElementById("englishInput");
let submitBtn       = document.getElementById("submitBtn");
let gradeBody       = document.getElementById("gradeBody");
let mathAvgCell     = document.getElementById("mathAvg");
let englishAvgCell  = document.getElementById("englishAvg");
let overallAvgCell  = document.getElementById("overallAvg");

submitBtn.addEventListener("click", function () {

    let mathVal    = Number(mathInput.value);
    let englishVal = Number(englishInput.value);

    if (mathInput.value === "" || englishInput.value === "" ||
        isNaN(mathVal) || isNaN(englishVal)) {
        alert("Please enter both Math and English grades.");
        return;
    }

    if (mathVal < 0 || mathVal > 100 || englishVal < 0 || englishVal > 100) {
        alert("Grades should be between 0 and 100.");
        return;
    }

    let rowAvg = ((mathVal + englishVal) / 2).toFixed(2);

    let newRow = document.createElement("tr");

    let indexCell = document.createElement("td");
    indexCell.textContent = gradeBody.rows.length + 1;

    let mathCell = document.createElement("td");
    mathCell.textContent = mathVal;

    let englishCell = document.createElement("td");
    englishCell.textContent = englishVal;

    let avgCell = document.createElement("td");
    avgCell.textContent = rowAvg;

    newRow.appendChild(indexCell);
    newRow.appendChild(mathCell);
    newRow.appendChild(englishCell);
    newRow.appendChild(avgCell);
    gradeBody.appendChild(newRow);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
    mathInput.focus();
});

function updateColumnAverages() {
    let rows = gradeBody.rows;
    let rowCount = rows.length;

    if (rowCount === 0) {
        mathAvgCell.textContent = "-";
        englishAvgCell.textContent = "-";
        overallAvgCell.textContent = "-";
        return;
    }

    let mathTotal = 0;
    let englishTotal = 0;

    for (let i = 0; i < rowCount; i++) {
        let mathScore = Number(rows[i].cells[1].textContent);
        let englishScore = Number(rows[i].cells[2].textContent);

        mathTotal += mathScore;
        englishTotal += englishScore;
    }

    let mathAverage = mathTotal / rowCount;
    let englishAverage = englishTotal / rowCount;

    let overallAverage = (mathTotal + englishTotal) / (rowCount * 2);

    mathAvgCell.textContent = mathAverage.toFixed(2);
    englishAvgCell.textContent = englishAverage.toFixed(2);
    overallAvgCell.textContent = overallAverage.toFixed(2);
}
