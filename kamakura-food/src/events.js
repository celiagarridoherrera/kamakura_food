//Intenta separar los eventos en este archivo.

import {products} from '../assets/data/data.js';
import {getFilters, getFullProducts} from './menu.js';
import {filterProducts} from './searcher.js';

function init() {
    let filterContainer = document.getElementById('filters');
    let productContainer = document.getElementById('products');

    //  MOSTRAR FILTROS Y PRODUCTOS
    getFilters(filterContainer);

    productContainer.innerHTML = filterProducts(products, 'todos', getFullProducts);

    filterContainer.addEventListener('click', (event) => handleFilterClick(event, productContainer));

    // AQUÍ SE AÑADIRÍAN LOS DEMÁS EVENTOS DE CART Y TICKET
}

// CLICKS DE LOS BOTONES (MÁS REUTILIZABLE, P. EJ. CARRITO)
function handleFilterClick(event, productContainer) {
    if (event.target.classList.contains('filter')) {
        let category = event.target.getAttribute('data-category');
        let filteredProducts = filterProducts(products, category, getFullProducts);
        productContainer.innerHTML = filteredProducts;
    }
}

init();