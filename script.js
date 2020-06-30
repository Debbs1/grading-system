let studentName = document.getElementById("student-name");
	let subject = document.getElementById("subject");
	let score = document.getElementById("score");
	let gradeBtn = document.getElementById("grade-btn");
	let displayName = document.getElementBtId('display-name');

	gradeBtn.addEventListener ("click", getGrade);
	function getGrade()
		{
			if (studentName.value!=="" && studentName.value!==null) 
			{
				return true;
				else if (subject.value!=="" && subject.value!==null) {
				return true;
				else if (score.value!=="" && score.value!==null) {
				return true;
			}
			displaySubject = document.getElementBtId('display-subject');
			displayScore = document.getElementBtId('display-score');
			displayGrade = document.getElementBtId('display-grade');
			displayName = document.getElementBtId('display-name');

			let newScore = parseInt(score.value);

			if (newScore >= 70) {
				Grade = "Pass";
			}else{
				Grade = "Fail";
			}
			
		 
			displayName.innerHTML = "NAME:" +"" + studentName.value;
			displayScore.innerHTML = "SCORE:" +"" + score.value;
			displaySubject.innerHTML = "SUNBECT:"+ ""+ subject.value;
			displayGrade.innerHTML = Grade;
	    };
