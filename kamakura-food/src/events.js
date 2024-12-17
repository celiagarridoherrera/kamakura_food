//Intenta separar los eventos en este archivo.

import { products } from '../assets/data/data.js';
import { getFilters, getFullProducts } from './menu.js';
import { filterProducts } from './searcher.js';
import { addProductToCart, isProductInCart, restoreCart } from './cart.js';

function init() {
    const filterContainer = document.getElementById('filters');
    const productContainer = document.getElementById('products');

    // VER FILTROS
    getFilters(filterContainer);

    // RENDERIZAR TODOS LOS PLATOS
    renderProducts('todos');

    // FILTRAR PLATOS
    filterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter')) {
            const category = event.target.getAttribute('data-category');
            renderProducts(category);
        }
    });

    // AÑADIR AL CARRITO
    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-button')) {
            handleAddToCart(event);
        }
    });

    restoreCart();
}

// RENDERIZAR PLATOS
function renderProducts(category) {
    const productContainer = document.getElementById('products');
    const filteredProducts = filterProducts(products, category, getFullProducts);
    productContainer.innerHTML = filteredProducts;
}

// LO QUE TE PERMITE HACERLO DESDE LOS FILTROS
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

init();