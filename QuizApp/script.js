
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

let currentQuestion = 0;


function init() {
    document.getElementById("questions_counter_all").innerHTML = questions.length;
    showQuestion();
    showAnswers();
}

function showQuestion() {
    let question = questions[currentQuestion];
    let questionTextRef = document.getElementById("questionText")
    
    questionTextRef.innerHTML = question["question"]
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
        console.log("richtig");
        document.getElementById(i).parentNode.classList.add("bg-success");

    } else {
        console.log("falsch")
        document.getElementById(i).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
}