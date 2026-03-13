
let questionsRightAnswered = 0;
let successSound = new Audio("./assets/sounds/success.mp3");
let failSound = new Audio("./assets/sounds/fail.mp3");


function init() {
    document.getElementById("questions_counter_all").innerHTML = selectedQuiz.length;
    showQuestion();
    showAnswers();
}

function clickAnswer(i) {
    let question = selectedQuiz[currentQuestion];
    let answerSelected = i.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if(answerSelected == question["right_answer"]){
        successSound.play()
        document.getElementById(i).parentNode.classList.add("bg-success");
        questionsRightAnswered = questionsRightAnswered +1
    } else {
        failSound.play()
        document.getElementById(i).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("next_button_id").disabled = false; 
}

function clickNextQuestionBtn() {
    currentQuestion = currentQuestion +1; 
    document.getElementById("next_button_id").disabled = true;
    resetColorAnswerButtons();
    showQuestion();
    showAnswers(); 
}

function resetColorAnswerButtons(){
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_1").parentNode.classList.remove("bg-success"); 
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");  
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");  
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");    
}

function startNewGame() {
    currentQuestion = 0;
    questionsRightAnswered = 0;
    document.getElementById("end_quiz_body").style = "display: none";
    document.getElementById("quiz_body").style = "";
    init()
}

function abortGameAndLoadStartscreen() {
    document.getElementById("quiz_body").style = "display: none";
    document.getElementById("select_quiz_screen_id").style = "";
    questionsRightAnswered = 0;
}

function clickRestartGameBtn() {
    questionsRightAnswered = 0;
    currentQuestion = 0;
    resetColorAnswerButtons();
    showQuestion();
    showAnswers(); 
}



