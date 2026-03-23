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

function getHTMLForDishes(j) {
    return `<section class="dish_content_full_width">
                    <div class="dish_content_max_width">
                        <div class="dishes_category_list">
                            <div class="dish_card">
                                <div class="dish_card_image">
                                    <img src="./assets/dish_img/dish_0${j}.png">
                                </div>
                                <div class="dish_card_stats">
                                    <div class="dish_card_header">
                                        <h3>${dishes[j].name}</h3>
                                        <h3>${dishes[j].price}€</h3>
                                    </div>
                                    <div class="dish_card_middle">
                                        <p>${dishes[j].description}</p>
                                        <p>Zutaten: ${dishes[j].ingredients}</p>
                                    </div>
                                    <div class="dish_card_bottom">
                                        <button onclick="checkDishInCart(${j})" id="button_not_added_${j}">Add to basket</button>
                                        <button id="button_added${j}" style="display: none; color: orange">Add to basket</button>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
}