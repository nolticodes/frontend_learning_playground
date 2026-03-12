let allQuizes = ["quiz_navbar_text_1", "quiz_navbar_text_2", "quiz_navbar_text_3", "quiz_navbar_text_4"]
let selectedQuiz = 0 

function activateStartButton(id) {
    document.getElementById("button_start_quiz_id").disabled = false;
    for (let i = 0; i <  allQuizes.length; i++) {
        document.getElementById(allQuizes[i]).style = "color: grey";
    }
    document.getElementById(id).style = "color: white";   
}

function loadAndStartQuiz() {
    document.getElementById("button_start_quiz_id");

}

function showQuestion() {
    if (currentQuestion >= questions_1.length) {
        document.getElementById("end_quiz_body").style = ""
        document.getElementById("quiz_body").style = "display: none"
        document.getElementById("questions_counter_all_score").innerHTML = questions_1.length;
        document.getElementById("amount_correct_answer").innerHTML = questionsRightAnswered;

    } else {
        let question = questions_1[currentQuestion];
        let questionTextRef = document.getElementById("questionText");
        let progressInPercent = ((currentQuestion + 1) / questions_1.length) * 100;

        document.getElementById("progress_bar_id").style = `width: ${progressInPercent}%;`;         
        document.getElementById("progress_bar_id").innerHTML = `${progressInPercent} %`; 
        document.getElementById("questions_counter_current").innerHTML = currentQuestion +1;
        questionTextRef.innerHTML = question["question"]
    }
}

