let commentsInLocalStorage = []; 
let newBookArray = []

function init() {
    getBooksFromLocalStorage();
    renderBooks();
}

// Render books to HTML
function renderBooks() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");
    bookInfoboxRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        bookInfoboxRef.innerHTML += getTemplateBookStatsHTML(i);
        setCommentArea(i);
        setLikeArea(i);
    }
}

// Render book comments to HTML
function setCommentArea(i) {
    let bookCommentRef = document.getElementById(`book_infobox_comment_id${i}`);
        if (books[i].comments.length > 0) {
            for (let j = 0; j < books[i].comments.length; j++) {
                bookCommentRef.innerHTML += getTemplateBookCommentsHTML(i, j)
            }
        } else {
            bookCommentRef.innerHTML += "Bisher keine Kommentare"
        }
}

function setCommentAreaCategorySelected(i) {
    let bookCommentRef = document.getElementById(`book_infobox_comment_id${i}`);
        if (newBookArray[i].comments.length > 0) {
            for (let j = 0; j < newBookArray[i].comments.length; j++) {
                bookCommentRef.innerHTML += getTemplateBookCategorySelectedCommentsHTML(i, j)
            }
        } else {
            bookCommentRef.innerHTML += "Bisher keine Kommentare"
        }
}

// Set like Area of books
function setLikeArea(i) {
    let likeStatusRef = document.getElementById(`like_img_id_${i}`)
    if (books[i].liked == true) {
        likeStatusRef.innerHTML += getTemplateLikeButtonLikedHTML(i)
    } else {
        likeStatusRef.innerHTML += getTemplateLikeButtonNotLikedHTML(i)
    }
}

function setLikeAreaCategorySelected(i) {
    let likeStatusRef = document.getElementById(`like_img_id_${i}`)
    if (newBookArray[i].liked == true) {
        likeStatusRef.innerHTML += getTemplateLikeButtonLikedHTML(i)
    } else {
        likeStatusRef.innerHTML += getTemplateLikeButtonNotLikedHTML(i)
    }
}

// Set like buttons of books
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

// Add comments to books
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

// Save bew books array to local storage
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

// bold font when category is selected

// Set and render book category
function set_book_category_fantasy() {
    let getCategoryRef = document.getElementById("catagory_fantasy_id").innerHTML;

    getBooksSelectedCategory(getCategoryRef);
    renderBookCategorySelected();
}

function getBooksSelectedCategory(getCategoryRef) {
    newBookArray = []; 
    for (let i=0; i < books.length; i++) {
        if(books[i].genre == getCategoryRef) {
            newBookArray.push(books[i])
        }
    }
}

function renderBookCategorySelected() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");
    bookInfoboxRef.innerHTML = ""

    for(let i=0; i < newBookArray.length; i++){
        bookInfoboxRef.innerHTML += getTemplateBookCategorySelectedStatsHTML(i);
        setCommentAreaCategorySelected(i);
        setLikeAreaCategorySelected(i);
    }
}

// add comments and likes to right book when category is selected 

