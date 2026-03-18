let commentsInLocalStorage = []; 

function init() {
    getBooksFromLocalStorage();
    renderBooks();
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
    saveNewBooksArray()
}

// Add Comment
function addComment(i) {
    let commmentInputRef = document.getElementById(`comment_input_id_${i}`);

    if (commmentInputRef.value != "") {
        books[i].comments.push({"name": "Anonym",
                                "comment": commmentInputRef.value});
        commmentInputRef.value = ""
    }
    renderCommentsCurrentBook(i);
    saveNewBooksArray()
}

function renderCommentsCurrentBook(i) {
    let currentCommentRef = document.getElementById(`book_infobox_comment_id${i}`)
    currentCommentRef.innerHTML = getNewCommentsArea(i) 
}

function getNewCommentsArea(i) {
    let newComments = ""
    for(j = 0; j < books[i].comments.length; j++){
        newComments += getTemplateBookCommentsHTML(i, j)
    } 
    return newComments;
}

// Save New Books Array to local Storage
function saveNewBooksArray() {
    localStorage.setItem("newBooks", JSON.stringify(books))
}

function getBooksFromLocalStorage() {
    let booksFromLocalStorage = JSON.parse(localStorage.getItem("newBooks"));
    if (booksFromLocalStorage === null) {
        books
    } else {
        books = booksFromLocalStorage
    }
}

