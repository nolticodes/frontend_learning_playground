
let currentQuestion = 0;
let questionsRightAnswered = 0;
let questions = [
    {
        "question": "Wie ist der Vorname von Kanye West?",
        "answer_1": "Ye",
        "answer_2": "West",
        "answer_3": "North",
        "answer_4": "Kanye",
        "right_answer": 4
    },
    {
        "question": "Wie ist der Nachname von Kanye West?",
        "answer_1": "North",
        "answer_2": "West",
        "answer_3": "East",
        "answer_4": "South",
        "right_answer": 2
    },
    {
        "question": "Welches Lied ist von Kanye West?",
        "answer_1": "Circles",
        "answer_2": "Shabbabs Botten",
        "answer_3": "Burn",
        "answer_4": "Battlefield Freestyle",
        "right_answer": 3
    },
    {
        "question": "Wie heißt die Modemarke von Kanye West?",
        "answer_1": "Yeezy",
        "answer_2": "Kanye",
        "answer_3": "Kanye West",
        "answer_4": "Ye",
        "right_answer": 1
    },
    {
        "question": "Wie heißt die Frau von Kanye West?",
        "answer_1": "Kim",
        "answer_2": "Kanye",
        "answer_3": "Bianca",
        "answer_4": "Taylor",
        "right_answer": 3
    },
];


function init() {
    document.getElementById("questions_counter_all").innerHTML = questions.length;
    showQuestion();
    showAnswers();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById("end_quiz_body").style = ""
        document.getElementById("quiz_body").style = "display: none"
        document.getElementById("questions_counter_all_score").innerHTML = questions.length;
        document.getElementById("amount_correct_answer").innerHTML = questionsRightAnswered;

    } else {
        let question = questions[currentQuestion];
        let questionTextRef = document.getElementById("questionText");
        let progressInPercent = ((currentQuestion + 1) / questions.length) * 100;

        document.getElementById("progress_bar_id").style = `width: ${progressInPercent}%;`;         
        document.getElementById("progress_bar_id").innerHTML = `${progressInPercent} %`; 
        document.getElementById("questions_counter_current").innerHTML = currentQuestion +1;
        questionTextRef.innerHTML = question["question"]
    }
}

function showAnswers() {
    let answerOne = questions[currentQuestion];
    let answerTwo = questions[currentQuestion];
    let answerThree = questions[currentQuestion];
    let answerFour = questions[currentQuestion];
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
    let question = questions[currentQuestion];
    let answerSelected = i.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if(answerSelected == question["right_answer"]){
        document.getElementById(i).parentNode.classList.add("bg-success");
        questionsRightAnswered = questionsRightAnswered +1
    } else {
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




