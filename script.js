let formDiv = document.getElementById('form-div');
formDiv.addEventListener("submit", (event)=>{
event.preventDefault();
console.log("clicked");


let results = document.getElementById('results');
let studentName = document.getElementById('student-name');
let subject = document.getElementById('subject');
let score = document.getElementById('score');
let displayName = document.getElementById('display-name');
let displaySubject = document.getElementById('display-subject');
let displayGrade = document.getElementById('display-grade');


if (score.value >=80){
	displayName.innerHTML = studentName.value;
	displaySubject.innerHTML = subject.value;
	displayGrade.innerHTML = "Pass";
}
else if (score.value<80) {
	displayName.innerHTML = studentName.value;
	displaySubject.innerHTML = subject.value;
	displayGrade.innerHTML = "Fail";
}
});



