
function init() {
    renderBooks()
}

function renderBooks() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");
    bookInfoboxRef.innerHTML = "";

    for (i = 0; i < books.length; i++) {
        bookInfoboxRef.innerHTML += getTemplateBookStatsHTML(i)
        let bookCommentRef = document.getElementById(`book_infobox_comment_id${i}`);
        for (j = 0; j < books[i].comments.length; j++){
            bookCommentRef.innerHTML += getTemplateBookCommentsHTML(i, j)
        }
        let likeStatusRef = document.getElementById(`like_img_id_${i}`)
        if(books[i].liked == true){
            likeStatusRef.innerHTML += getTemplateLikeButtonLikedHTML(i)
        } else {
            likeStatusRef.innerHTML += getTemplateLikeButtonNotLikedHTML(i)
        }
    }
}

function likeButton(i) {
    let likeCounterRef = document.getElementById(`like_counter_id_${i}`);
    if(books[i].liked == true){
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) - 1;
        books[i].liked = false;
        document.getElementById(`heart_full_id_${i}`).style = "display: none";
        document.getElementById(`heart_empty_id_${i}`).style = "";
    } else {
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) + 1;
        books[i].liked = true;
        document.getElementById(`heart_full_id_${i}`).style = "";
        document.getElementById(`heart_empty_id_${i}`).style = "display: none";
    }
}

// Kommentar hinzufügen
function addComment(i) {
    let commmentInputRef = document.getElementById(`comment_input_id_${i}`);

    if (commmentInputRef.value != ""){
        books[i].comments.push(commmentInputRef.value);
        commmentInputRef = ""
    }
    saveCommentToLocalStorage(i);
    getCommentsFromLocalStorage(i);
    renderBooks();
}

// Kommentar in localSotrage speichern
let localStorageComments = JSON.parse(localStorage.getItem("commentsList"))

function saveCommentToLocalStorage(i) {
    localStorage.setItem("commentsList", JSON.stringify(books[i].comments))
}

function getCommentsFromLocalStorage(i) {
    if(localStorageComments === null) {
        books[i].comments
    } else {
        books[i].comments = localStorageComments
    }
}






// Kommentare rendern

// Like Status in localStorage speichern

// Like Status rendern 

