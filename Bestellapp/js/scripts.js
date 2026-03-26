cart = [];


function init() {
    renderCategories()
    cartFullOrEmpty()
}

function renderCategories() {
    let categoriesRef = document.getElementById("full_dish_content_id");
    for (let i = 0; i < categories.length; i++) {
        categoriesRef.innerHTML += getHTMLForCategories(i);
        renderDishesFromCategory(i)
    }
}

function renderDishesFromCategory(i) {
    let dishesFromCategoryRef = document.getElementById(`dishes_from_category_${i}`);
    for (let j = 0; j < dishes.length; j++) {
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
    dishes[j].amount = dishes[j].amount + 1
    console.log(dishes[j].amount)
    cartFullOrEmpty();
}

function checkDishInCart(j) {
    let found = false
    for (let i = 0; i < cart.length; i++) {
        if (dishes[j].name == cart[i].name) {
            cart[i].amount = cart[i].amount + 1;
            found = true
            dishes[j].amount = dishes[j].amount + 1
        }
    }
    if (found == false) {
        addToCart(j)
    }
    cartFullOrEmpty();
    changeAddToBasketButton(j);
    addCartAmount();
}

function changeAddToBasketButton(j) {
    let buttonAddToBasketRef = document.getElementById(`button_not_added_${j}`);
    let buttonAddAgainRef = document.getElementById(`button_added_${j}`);
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (dishes[j].name == cart[i].name) {
            buttonAddToBasketRef.style = "display: none";
            buttonAddAgainRef.innerHTML = `Added ${dishes[j].amount}`
            buttonAddAgainRef.style = "display: flex; color: orange";
            found = true
        }
    }
    if (found == false) {
        buttonAddToBasketRef.style = "display: flex";
        buttonAddAgainRef.style = "display: none;";
    }
}

function renderBothCarts() {
    renderCartInto("basket_dish_list_id");
    renderCartInto("basket_dish_list_mobile_id");
}

function renderCartInto(cartContainerID) {
    let cartContainerRef = document.getElementById(cartContainerID);
    cartContainerRef.innerHTML = "";
    cartContainerRef.innerHTML += getHTMLForCart();
}

function getHTMLForCart() {
    let HTMLForCart = ""
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].amount > 1) {
            HTMLForCart += getHTMLForCartDishAmountBiggerThanOne(i)
        } else {
            HTMLForCart += getHTMLForCartDishAmountOne(i)
        }
    }
    return HTMLForCart
}

function increaseAmount(i) {
    cart[i].amount = cart[i].amount + 1;
    renderSubtotalInBothCarts()
    renderTotalInBothCarts();
    renderTotalButtonsInBothCarts();
    renderBothCarts();
}

function decreaseAmount(i) {
    cart[i].amount = cart[i].amount - 1;
    renderSubtotalInBothCarts();
    renderTotalInBothCarts();
    renderTotalButtonsInBothCarts();
    renderBothCarts();
}

function deleteDishFromCart(i) {
    let deletedDishIndex = cart[i].dishIndex
    cart.splice(i, 1);
    cartFullOrEmpty()
    changeAddToBasketButton(deletedDishIndex)
}

function calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += Number(cart[i].amount) * Number(cart[i].price);
    }
    return subtotal
}

function renderSubtotalInBothCarts() {
    renderSubtotal("subtotal_id");
    renderSubtotal("subtotal_mobile_id");
}

function renderSubtotal(SubtotalCartID) {
    let subtotalRef = document.getElementById(SubtotalCartID);
    subtotalRef.innerHTML = `${calculateSubtotal().toFixed(2)}€`
}


function calculateTotal() {
    let total = 0;
    total = Number(4.99 + calculateSubtotal()).toFixed(2) + "€";
    return total
}


function renderTotalInBothCarts() {
    renderTotal("total_id")
    renderTotal("total_mobile_id");
}

function renderTotalButtonsInBothCarts() {
    renderTotalButton("total_for_button_id");
    renderTotalButton("total_for_button_mobile_id")
}

function renderTotal(CartContainerID) {
    let totalRef = document.getElementById(CartContainerID);
    totalRef.innerHTML = calculateTotal();
}

function renderTotalButton(CartContainerID) {
    let totalButtonRef = document.getElementById(CartContainerID);
    totalButtonRef.innerHTML = `Buy now (${calculateTotal()})`
}

function cartFullInBothCarts() {
    cartFull("shopping_cart_full_id", "shopping_cart_empty_id");
    cartFull("shopping_cart_full_mobile_id", "shopping_cart_empty_mobile_id");
}

function cartEmptyInBothCarts() {
    cartEmpty("shopping_cart_full_id", "shopping_cart_empty_id");
    cartEmpty("shopping_cart_full_mobile_id", "shopping_cart_empty_mobile_id");
}

function cartFull(CartContainerFullID, CartContainerEmptyID) {
    let basketRef = document.getElementById(CartContainerFullID);
    let basketEmptyRef = document.getElementById(CartContainerEmptyID);
    basketRef.style = "display: flex";
    basketEmptyRef.style = "display: none";
}

function cartEmpty(CartContainerFullID, CartContainerEmptyID) {
    let basketRef = document.getElementById(CartContainerFullID);
    let basketEmptyRef = document.getElementById(CartContainerEmptyID);
    basketRef.style = "display: none";
    basketEmptyRef.style = "display: flex";
}

function cartFullOrEmpty() {
    if (cart.length == 0) {
        cartEmptyInBothCarts();
    } else {
        cartFullInBothCarts();
        renderSubtotalInBothCarts();
        renderTotalInBothCarts();
        renderTotalButtonsInBothCarts();
        renderBothCarts();
    }
}

function openDialog() {
    let dialogRef = document.getElementById("order_received_dialog")
    dialogRef.showModal();
    cart = [];
    cartFullOrEmpty();
    resetAddAgainButton()
}

function closeDialog() {
    let dialogRef = document.getElementById("order_received_dialog")
    dialogRef.close();
}

function resetAddAgainButton() {
    for (let i=0; i < dishes.length; i++) {
        let buttonAddToBasketRef = document.getElementById(`button_not_added_${i}`);
        let buttonAddAgainRef = document.getElementById(`button_added_${i}`);
        buttonAddToBasketRef.style = "display: flex";
        buttonAddAgainRef.style = "display: none;";
        dishes[i].amount = 0;
    }
}

function addCartAmount() {
    let mobileCardAmountEclipseRef = document.getElementById("mobile_cart_quantity_eclipse_id");
    let mobileCardAmountRef = document.getElementById("mobile_cart_quantity_id");
    mobileCardAmountEclipseRef.style = "display: flex";
    mobileCardAmountRef.innerHTML = cart.length;
}

function openCart() {
    let mobileCartRef = document.getElementById("dialog_shopping_cart_id")
    mobileCartRef.showModal()
}

function closeCartDialog() {
    let dialogCartRef = document.getElementById("dialog_shopping_cart_id")
    dialogCartRef.close();
}
