
function init() {
    renderCategories()
}

function renderCategories() {
    let categoriesRef = document.getElementById("full_dish_content_id");
    for (i = 0; i < categories.length; i++) {
        categoriesRef.innerHTML += getHTMLForCategories(i);
        renderDishesFromCategory(i)
    }
}

function renderDishesFromCategory(i) {
    let dishesFromCategoryRef = document.getElementById(`dishes_from_category_${i}`);
    for (j = 0; j < dishes.length; j++) {
        if (dishes[j].category == categories[i]) {
            dishesFromCategoryRef.innerHTML += getHTMLForDishes(j)
        }
    }
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

cart = [];

function addToCart(j) {
    cart.push({"name": dishes[j].name,
                "price": dishes[j].price,
                "amount": 1
    });
    console.log(cart)     
}

function checkDishInCart (j){
    let found = false
    for (let i=0 ; i < cart.length; i++){
        if(dishes[j].name == cart[i].name) {
            cart[i].amount = cart[i].amount +1;
            found = true 
            }        
        }
    if (found == false) {
        addToCart(j)
    }
    renderCart();
}

function renderCart() {
    let basketDishListRef = document.getElementById("basket_dish_list_id");
    basketDishListRef.innerHTML = "";
    basketDishListRef.innerHTML += getHTMLForCart();

    
                        
}

function getHTMLForCart() {
    let HTMLForCart = ""
    for (let i=0; i < cart.length; i++){
        HTMLForCart += `<div class="basket_dish_list">
                            <h4><span>${cart[i].amount}x </span>${cart[i].name}</h4>
                            <div class="basket_dish_list_bottom">
                                <h5>Counter</h5>
                                <h4>${Number(cart[i].price)*Number(cart[i].amount)}</h4>
                            </div>
                        </div>`
        }
        return HTMLForCart
}
