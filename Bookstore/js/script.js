
function init() {
    renderBooks()
}

function renderBooks() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");
    bookInfoboxRef.innerHTML = "";

    for (i = 0; i < books.length; i++) {
        bookInfoboxRef.innerHTML += getTemplateBookStatsHTML(i)
        setCommentArea(i)
        setLikeArea(i);
    }
}

function setCommentArea(i) {
    let bookCommentRef = document.getElementById(`book_infobox_comment_id${i}`);
        if (books[i].comments.length > 0) {
            for (j = 0; j < books[i].comments.length; j++) {
                bookCommentRef.innerHTML += getTemplateBookCommentsHTML(i, j)
            }
        } else {
            bookCommentRef.innerHTML += "Bisher keine Kommentare"
        }
}

function setLikeArea(i) {
    let likeStatusRef = document.getElementById(`like_img_id_${i}`)
    if (books[i].liked == true) {
        likeStatusRef.innerHTML += getTemplateLikeButtonLikedHTML(i)
    } else {
        likeStatusRef.innerHTML += getTemplateLikeButtonNotLikedHTML(i)
    }
}

function likeButton(i) {
    let likeCounterRef = document.getElementById(`like_counter_id_${i}`);
    if (books[i].liked == true) {
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) - 1;
        books[i].liked = false;
        books[i].likes = books[i].likes - 1
        document.getElementById(`heart_full_id_${i}`).style = "display: none";
        document.getElementById(`heart_empty_id_${i}`).style = "";
    } else {
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) + 1;
        books[i].liked = true;
        books[i].likes = books[i].likes + 1
        document.getElementById(`heart_full_id_${i}`).style = "";
        document.getElementById(`heart_empty_id_${i}`).style = "display: none";
    }
}

// Add Comment
function addComment(i) {
    let commmentInputRef = document.getElementById(`comment_input_id_${i}`);

    if (commmentInputRef.value != "") {
        books[i].comments.push(commmentInputRef.value);
        commmentInputRef = ""
    }
    saveCommentToLocalStorage(i);
    getCommentsFromLocalStorage(i);
    renderCommentsCurrentBook(i);

}

function renderCommentsCurrentBook(i) {
    let currentCommentRef = document.getElementById(`book_infobox_comment_id${i}`)
}

// Save Comment to local Storage
let localStorageComments = JSON.parse(localStorage.getItem("commentsList"))

function saveCommentToLocalStorage(i) {
    localStorage.setItem("commentsList", JSON.stringify(books[i].comments))
}

function getCommentsFromLocalStorage(i) {
    if (localStorageComments === null) {
        books[i].comments
    } else {
        books[i].comments = localStorageComments
    }
}

// Render Comments

// Save Like Status to loval Storage

// Render Like Status

