
let currentQuestion = 0;
let questionsRightAnswered = 0;
let successSound = new Audio("./assets/sounds/success.mp3");
let failSound = new Audio("./assets/sounds/fail.mp3");



function init() {
    document.getElementById("questions_counter_all").innerHTML = quiz_navbar_text_1.length;
    showQuestion();
    showAnswers();
}

// function showQuestion() {
//     if (currentQuestion >= quiz_navbar_text_1.length) {
//         document.getElementById("end_quiz_body").style = ""
//         document.getElementById("quiz_body").style = "display: none"
//         document.getElementById("questions_counter_all_score").innerHTML = quiz_navbar_text_1.length;
//         document.getElementById("amount_correct_answer").innerHTML = questionsRightAnswered;

//     } else {
//         let question = quiz_navbar_text_1[currentQuestion];
//         let questionTextRef = document.getElementById("questionText");
//         let progressInPercent = ((currentQuestion + 1) / quiz_navbar_text_1.length) * 100;

//         document.getElementById("progress_bar_id").style = `width: ${progressInPercent}%;`;         
//         document.getElementById("progress_bar_id").innerHTML = `${progressInPercent} %`; 
//         document.getElementById("questions_counter_current").innerHTML = currentQuestion +1;
//         questionTextRef.innerHTML = question["question"]
//     }
// }

function showAnswers() {
    let answerOne = quiz_navbar_text_1[currentQuestion];
    let answerTwo = quiz_navbar_text_1[currentQuestion];
    let answerThree = quiz_navbar_text_1[currentQuestion];
    let answerFour = quiz_navbar_text_1[currentQuestion];
    let answerOneRef = document.getElementById("answer_1");
    let answerTwoRef = document.getElementById("answer_2");
    let answerThreeRef = document.getElementById("answer_3");
    let answerFourRef = document.getElementById("answer_4");

    answerOneRef.innerHTML = answerOne["answer_1"];
    answerTwoRef.innerHTML = answerTwo["answer_2"];
    answerThreeRef.innerHTML = answerThree["answer_3"];
    answerFourRef.innerHTML = answerFour["answer_4"];
}

function clickAnswer(i) {
    let question = quiz_navbar_text_1[currentQuestion];
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




