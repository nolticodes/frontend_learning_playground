let allQuizes = ["quiz_navbar_text_1", "quiz_navbar_text_2", "quiz_navbar_text_3", "quiz_navbar_text_4"];
let selectedQuiz = 0; 
let currentQuestion = 0;
let selectedQuizImage = ""
let selectedQuizText = ""


function activateStartButton(id) {
    document.getElementById("button_start_quiz_id").disabled = false;
    for (let i = 0; i <  allQuizes.length; i++) {
        document.getElementById(allQuizes[i]).style = "color: grey";
    }
    document.getElementById(id).style = "color: white";   
    selectedQuiz = allQuizData[id]; 
    currentQuestion = 0;
    selectedQuizImage = allImageData[id];
    selectedQuizText = allMusicansData[id];
    document.getElementById("selected_quiz_text").innerHTML = selectedQuizText;
}

function loadAndStartQuiz() {
    document.getElementById("button_start_quiz_id");
    document.getElementById("quiz_body").style = "";
    document.getElementById("select_quiz_screen_id").style = "display: none";
    document.getElementById("questions_counter_all").innerHTML = selectedQuiz.length;
    showQuestion();
    showAnswers();
    showImage();
}

function showQuestion() {
    if (currentQuestion >= selectedQuiz.length) {
        document.getElementById("end_quiz_body").style = ""
        document.getElementById("quiz_body").style = "display: none"
        document.getElementById("questions_counter_all_score").innerHTML = selectedQuiz.length;
        document.getElementById("amount_correct_answer").innerHTML = questionsRightAnswered;

    } else {
        let question = selectedQuiz[currentQuestion];
        let questionTextRef = document.getElementById("questionText");
        let progressInPercent = ((currentQuestion + 1) / selectedQuiz.length) * 100;

        document.getElementById("progress_bar_id").style = `width: ${progressInPercent}%;`;         
        document.getElementById("progress_bar_id").innerHTML = `${progressInPercent} %`; 
        document.getElementById("questions_counter_current").innerHTML = currentQuestion +1;
        questionTextRef.innerHTML = question.question;
    }
}

function showAnswers() {
    let answerOne = selectedQuiz[currentQuestion];
    let answerTwo = selectedQuiz[currentQuestion];
    let answerThree = selectedQuiz[currentQuestion];
    let answerFour = selectedQuiz[currentQuestion];
    let answerOneRef = document.getElementById("answer_1");
    let answerTwoRef = document.getElementById("answer_2");
    let answerThreeRef = document.getElementById("answer_3");
    let answerFourRef = document.getElementById("answer_4");

    answerOneRef.innerHTML = answerOne["answer_1"];
    answerTwoRef.innerHTML = answerTwo["answer_2"];
    answerThreeRef.innerHTML = answerThree["answer_3"];
    answerFourRef.innerHTML = answerFour["answer_4"];
}

function showImage() {
    let quizBodyImage = document.getElementById("quiz_body")
    quizBodyImage.style = `background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${selectedQuizImage})`;
}
