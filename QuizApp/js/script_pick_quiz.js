let allQuizes = ["quiz_navbar_text_1", "quiz_navbar_text_2", "quiz_navbar_text_3", "quiz_navbar_text_4"]

function activateStartButton(id) {
    document.getElementById("button_start_quiz_id").disabled = false;
    for (let i = 0; i <  allQuizes.length; i++) {
        document.getElementById(allQuizes[i]).style = "color: grey";
    }
    document.getElementById(id).style = "color: white";   
}

