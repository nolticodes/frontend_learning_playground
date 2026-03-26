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
                                    <div class="dish_card_text_left">
                                        <h3>${dishes[j].name}</h3>
                                        <p>${dishes[j].description}</p>
                                        <p>Zutaten: ${dishes[j].ingredients.join(", ")}</p>
                                        
                                    </div>
                                    <div class="dish_card_text_right">
                                        <h3>${dishes[j].price.toFixed(2)}€</h3>
                                        <button onclick="checkDishInCart(${j})" id="button_not_added_${j}">Add to basket</button>
                                        <button onclick="checkDishInCart(${j})" id="button_added_${j}" style="display: none; color: orange">Added ${dishes[j].amount}</button>  
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
}

function getHTMLForCartDishAmountOne(i) {
    return `<div class="basket_dish_list">
                <h4><span>${cart[i].amount}x </span>${cart[i].name}</h4>
                <div class="basket_dish_list_bottom">
                    <div class="basket_dish_list_bottom_counter">
                        <img onclick="deleteDishFromCart(${i})" src="./assets/icons/delete.svg">
                        <h5>${cart[i].amount} </h5> 
                        <h4 onclick="increaseAmount(${i})">+</h4>
                    </div>
                    <h4>${(Number(cart[i].price) * Number(cart[i].amount)).toFixed(2)}€</h4>
                </div>
            </div>`
}

function getHTMLForCartDishAmountBiggerThanOne(i) {
    return `<div class="basket_dish_list">
                <div class="basket_dish_list_title_bin">
                    <h4><span>${cart[i].amount}x </span>${cart[i].name}</h4>
                    <img onclick="deleteDishFromCart(${i})" src="./assets/icons/delete.svg">
                </div>
                <div class="basket_dish_list_bottom">
                    <div class="basket_dish_list_bottom_counter">
                        <h4 onclick="decreaseAmount(${i})"> -</h4>                          
                        <h5>${cart[i].amount} </h5> 
                        <h4 onclick="increaseAmount(${i})">+</h4>
                    </div>
                    <h4>${(Number(cart[i].price) * Number(cart[i].amount)).toFixed(2)}€</h4>
                </div>
            </div>`
}
