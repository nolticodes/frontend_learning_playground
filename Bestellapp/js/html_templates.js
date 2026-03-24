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
                                        <h3>${dishes[j].price.toFixed(2)}€</h3>
                                    </div>
                                    <div class="dish_card_middle">
                                        <p>${dishes[j].description}</p>
                                        <p>Zutaten: ${dishes[j].ingredients}</p>
                                    </div>
                                    <div class="dish_card_bottom">
                                        <button onclick="checkDishInCart(${j})" id="button_not_added_${j}">Add to basket</button>
                                        <button onclick="checkDishInCart (${j})" id="button_added_${j}" style="display: none; color: orange">Add again</button>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
}

function getHTMLForCart() {
    let HTMLForCart = ""
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].amount > 1) {
            HTMLForCart += `<div class="basket_dish_list">
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
        } else {
            HTMLForCart += `<div class="basket_dish_list">
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
    }
    return HTMLForCart
}
