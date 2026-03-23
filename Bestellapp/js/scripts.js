let categoriesRef = document.getElementById("full_dish_content_id")


function init() {
    renderCategories()
}

function renderCategories() {
    for (i = 0; i < categories.length; i++){
        categoriesRef.innerHTML += getHTMLForCategories(i+1);
        renderDishesFromCategory(i+1)
    }
}

function getHTMLForCategories(i) {
    return `<section class="dish_category_full_width">
                <div class="dish_category_max_width">
                    <img src="./assets/img/logo_category_${i}.png">
                    <h2>KRABBEN BURGER</h2>
                </div>
            </section>
            <section id="dishes_from_category_${i}">
            </section>`
}

function renderDishesFromCategory(i) {
    let dishesFromCategoryRef = document.getElementById(`dishes_from_category_${i}`);
    console.log(dishesFromCategoryRef);

}
