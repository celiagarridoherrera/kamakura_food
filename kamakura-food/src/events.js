import { products } from '../assets/data/data.js';
import { getFilters, getFullProducts } from './menu.js';
import { filterProducts } from './searcher.js';
import { addProductToCart, isProductInCart, restoreCart } from './cart.js';
import { createReceipt, handlePay, handleCloseReceipt } from './receipt.js';

function init() {
    const filterContainer = document.getElementById('filters');
    const productContainer = document.getElementById('products');
    const cartButton = document.getElementById('cart');
    const cartContainer = document.getElementById('cart-container');
    const proceedPayButton = document.getElementById('proceedPay-button');
    const payButton = document.getElementById('pay-button');
    const closeReceiptButton = document.getElementById('close-receipt');

   
    getFilters(filterContainer);
    renderProducts('todos');

   
    filterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter')) {
            const category = event.target.getAttribute('data-category');
            renderProducts(category);
        }
    });

    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-button')) {
            handleAddToCart(event);
        }
    });

    cartButton.addEventListener('click', () => {
        cartContainer.classList.toggle('open');
    });

    proceedPayButton.addEventListener('click', createReceipt);
    payButton.addEventListener('click', handlePay);
    closeReceiptButton.addEventListener('click', handleCloseReceipt);

    restoreCart();
}


function renderProducts(category) {
    const productContainer = document.getElementById('products');
    const filteredProducts = filterProducts(products, category, getFullProducts);
    productContainer.innerHTML = filteredProducts;
}


function handleAddToCart(event) {
    const productElement = event.target.closest('.product-container');
    const title = productElement.querySelector('h3').textContent;
    const price = productElement.querySelector('h5').textContent;

    if (isProductInCart(title)) {
        alert(`${title} ya está en el carrito. Puedes añadir más unidades desde el carrito.`);
    } else {
        addProductToCart(title, price);
    }
}

export {
    init,
    renderProducts,
    handleAddToCart
};

init();