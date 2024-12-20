import { products } from "../assets/data/data.js";

//DEBE contener las funcionalidades del carrito de compras.

function addCartStyle() {
    let styleCart = document.createElement('style');
    styleCart.textContent = ` 
    #cart-container.open {
    display: flex;
    }`;
    document.head.appendChild(styleCart);
}
addCartStyle();

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
let cartProducts = document.getElementById('cart-products');
let totalElement = document.getElementById('cart-total');

// TOTAL
function updateTotal() {
    let total = 0;
    Object.values(cartItems).forEach(item => {
        total += parseFloat(item.price) * item.quantity;
    });
    totalElement.textContent = `Total: ${total.toFixed(2)}€`;
    saveCartToLocalStorage();
}

// localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// CREAR PLATO EN EL CART
function createCartItem(title, price, quantity) {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-container');

    let subtotal = parseFloat(price) * quantity; //Subtotal

    cartItem.innerHTML = `
        <button class="close-button">
            <img src="./assets/img/close.svg" alt="close">
        </button>
        <div class="text-container">
            <h3>${title}</h3>
            <h5>${subtotal.toFixed(2)}</h5>
        </div>
        <div class="quantity-container">
            <button class="increase">+</button>
            <p class="quantity">${quantity}</p>
            <button class="decrease">-</button>
        </div>
    `;

    // ELIMINAR PRODUCTO
    cartItem.querySelector('.close-button').addEventListener('click', () => {
        delete cartItems[title];
        cartItem.remove();
        updateTotal();
    });

    // SUMAR Y RESTAR PLATOS
    cartItem.querySelector('.increase').addEventListener('click', () => {
        cartItems[title].quantity++;
        cartItem.querySelector('.quantity').textContent = cartItems[title].quantity;

        //Subtotal
        subtotal = parseFloat(price) * cartItems[title].quantity;
        cartItem.querySelector('.text-container h5').textContent = `${subtotal.toFixed(2)}`;

        updateTotal();
    });

    cartItem.querySelector('.decrease').addEventListener('click', () => {
        if (cartItems[title].quantity > 1) {
            cartItems[title].quantity--;
            cartItem.querySelector('.quantity').textContent = cartItems[title].quantity;

            //Subtotal
            subtotal = parseFloat(price) * cartItems[title].quantity;
            cartItem.querySelector('.text-container h5').textContent = `${subtotal.toFixed(2)}`;

            updateTotal();
        }
    });

    return cartItem;
}

// AñAÑADIR PRODUCTO
function addProductToCart(title, price) {
    cartItems[title] = { price, quantity: 1 };
    let cartItem = createCartItem(title, price, 1);
    cartProducts.appendChild(cartItem);
    updateTotal();
}

function isProductInCart(title) {
    return cartItems.hasOwnProperty(title);
}

// RESTAURAR
function restoreCart() {
    Object.entries(cartItems).forEach(([title, { price, quantity }]) => {
        let cartItem = createCartItem(title, price, quantity);
        cartProducts.appendChild(cartItem);
    });
    updateTotal();
}

export {
    addCartStyle,
    updateTotal,
    saveCartToLocalStorage,
    createCartItem,
    addProductToCart,
    isProductInCart,
    restoreCart
};

