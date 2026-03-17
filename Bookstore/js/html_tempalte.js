function getTemplateBookStatsHTML(i) {
    return `
            <div class="book_infobox">
                <div id="book_infobox_title_id" class="book_infobox_header">
                    <h2>${books[i].name}</h2>
                </div>

                <div class="border_line">
                </div>

                <div class="book_infobox_main">
                    <div class="book_infobox_main_img">
                        <img src="./assets/img/book_icon.png">
                    </div>

                    <div class="border_line">
                    </div>

                    <div class="book_infobox_main_header">
                        <h3>${books[i].price.toFixed(2)} €</h3>
                        <div class="book_infobox_main_header_likes">
                            <h4>${books[i].likes}</h4>
                            HERZ
                        </div>
                    </div>

                    <table class="book_infobox_main_stats">
                        <tr>
                            <td class="table_title">AUTHOR:</td>
                            <td class="table_value" id="book_infobox_author_id">${books[i].author}</td>
                        </tr>
                        <tr>
                            <td class="table_title">ERSCHEINUNGSJAHR:</td>
                            <td class="table_value" id="book_infobox_year_id">${books[i].publishedYear}</td>
                        </tr>
                        <tr>
                            <td class="table_title">GENRE:</td>
                            <td class="table_value" id="book_infobox_genre_id">${books[i].genre}</td>
                        </tr>
                    </table>

                    <div class="border_line">
                    </div>

                    <div class="book_infobox_main_comments_section"> 
                        <h2 id="book_infobox_comment_id${[i]}" class="book_infobox_main_comments">Kommentare:</h2>
                    </div>
                </div>


            </div>`
}

function getTemplateBookCommentsHTML(i, j) {
    return`
        <table class="book_infobox_main_comments_table">
            <tr>
                <td class="table_title_comment">${books[i].comments[j].name}:</td>
                <td class="table_value_comment">${books[i].comments[j].comment}:</td>
            </tr>
        </table>
            `
}