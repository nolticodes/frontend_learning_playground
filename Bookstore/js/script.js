
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