
function init() {
    renderBooks()
}

function renderBooks() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");

    for (i = 0; i < books.length; i++) {
        bookInfoboxRef.innerHTML += getTemplateBookStatsHTML(i)
        let bookCommentRef = document.getElementById(`book_infobox_comment_id${i}`);
        for (j = 0; j < books[i].comments.length; j++){
            bookCommentRef.innerHTML += getTemplateBookCommentsHTML(i, j)
        }
    }
}

function likeButton(i) {
    let likeCounterRef = document.getElementById(`like_counter_id_${i}`);
    if(books[i].liked == true){
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) - 1;
        books[i].liked = false;
        document.getElementById(`heart_full_id_${[i]}`).style = "display: none";
        document.getElementById(`heart_empty_id_${[i]}`).style = ""
    } else {
        likeCounterRef.innerHTML = Number(likeCounterRef.innerHTML) + 1;
        books[i].liked = true;
        document.getElementById(`heart_full_id_${[i]}`).style = "";
        document.getElementById(`heart_empty_id_${[i]}`).style = "display: none"
    }
}