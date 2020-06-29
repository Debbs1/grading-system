let studentName = document.getElementById("student-name").value;
let subject = document.getElementById("subject");
let score = document.getElementById("score");
let gradeBtn = document.getElementById("grade-btn");
let displayName = document.getElementBtId('display-name');
let displaySubject = document.getElementBtId('display-subject');
let displayScore = document.getElementBtId('display-score');
let displayGrade = document.getElementBtId('display-grade');

function getGrade(){
	preventDefault();
	displayName.textContent = "NAME:" + "" + studentName.value;
	displaySubject.textContent = "SUBJECT:" + "" + subject.value;
	displayScore.textContent = "SCORE:" + "" + score.value;

	if (score.value >== 70) {
		displayGrade.textContent = "Pass";
	} else {
		displayGrade.textContent = "Fail";
	}
}