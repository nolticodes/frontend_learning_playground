
function init() {
    renderBooks()
}

function renderBooks() {
    let bookInfoboxRef = document.getElementById("section_book_infobox_id");
    let bookTitleRef = document.getElementById("book_infobox_title_id");

    for (i = 0; i < books.length; i++) {
        bookInfoboxRef.innerHTML += getTemplateBookStatsHTML(i)
        for (j = 0; j < books.comments.length; j++){
            bookInfoboxRef.innerHTML += "ergrb"
        }
    }
}