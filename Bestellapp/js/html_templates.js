function getHTMLForCategories(i) {
    return `<section class="dish_category_full_width">
                <div class="dish_category_max_width">
                    <img src="./assets/img/logo_category_${i+1}.png">
                    <h2>${categories[i]}</h2>
                </div>
            </section>
            <section id="dishes_from_category_${i}">
            </section>`
}

