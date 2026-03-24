cart = [];


function init() {
    renderCategories()
    cartFullOrEmpty()
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

function addToCart(j) {
    cart.push({
        "name": dishes[j].name,
        "price": dishes[j].price,
        "amount": 1,
        "dishIndex": j
    });
    cartFullOrEmpty()
}

function checkDishInCart(j) {
    let found = false
    for (let i = 0; i < cart.length; i++) {
        if (dishes[j].name == cart[i].name) {
            cart[i].amount = cart[i].amount + 1;
            found = true
        }
    }
    if (found == false) {
        addToCart(j)
    }
    cartFullOrEmpty()
    changeAddToBasketButton(j);
}

function changeAddToBasketButton(j) {
    let buttonAddToBasketRef = document.getElementById(`button_not_added_${j}`);
    let buttonAddAgainRef = document.getElementById(`button_added_${j}`);
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (dishes[j].name == cart[i].name) {
            buttonAddToBasketRef.style = "display: none";
            buttonAddAgainRef.style = "display: flex; color: orange";
            found = true
        }
    }
    if (found == false) {
        buttonAddToBasketRef.style = "display: flex";
        buttonAddAgainRef.style = "display: none;";
    }
}

function renderCart() {
    let basketDishListRef = document.getElementById("basket_dish_list_id");
    basketDishListRef.innerHTML = "";
    basketDishListRef.innerHTML += getHTMLForCart();
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

function increaseAmount(i) {
    cart[i].amount = cart[i].amount + 1;
    renderSubtotal()
    renderTotal();
    renderCart();
}

function decreaseAmount(i) {
    cart[i].amount = cart[i].amount - 1;
    renderSubtotal();
    renderTotal();
    renderCart();
}

function deleteDishFromCart(i) {
    let deletedDishIndex = cart[i].dishIndex
    cart.splice(i, 1);
    cartFullOrEmpty()
    changeAddToBasketButton(deletedDishIndex)
}

function calculateSubtotal() {
    let subtotal = 0;
    for (i = 0; i < cart.length; i++) {
        subtotal += (cart[i].amount * cart[i].price);
    }
    return subtotal
}

function renderSubtotal() {
    let subtotalRef = document.getElementById("subtotal_id");
    subtotalRef.innerHTML = `${calculateSubtotal().toFixed(2)}€`
}

function calculateTotal() {
    let total = 0;
    total = Number(4.99 + calculateSubtotal()).toFixed(2) + "€";
    return total
}

function renderTotal() {
    let totalButtonRef = document.getElementById("total_for_button_id");
    let totalRef = document.getElementById("total_id");
    totalRef.innerHTML = calculateTotal();
    totalButtonRef.innerHTML = `Buy now (${calculateTotal()})`
}

function cartFullOrEmpty() {
    let basketRef = document.getElementById("shopping_cart_full_id");
    let basketEmptyRef = document.getElementById("shopping_cart_empty_id")
    if (cart.length == 0) {
        basketRef.style = "display: none"
        basketEmptyRef.style = "display: flex"
    } else {
        basketEmptyRef.style = "dispay: none"
        basketRef.style = "display: flex"
        renderSubtotal();
        renderTotal();
        renderCart();
    }
}

function checkDishAmountInCart() {

}

