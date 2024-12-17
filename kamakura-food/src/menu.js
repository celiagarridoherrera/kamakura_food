//DEBE imprimir en pantalla la información de filtros.

import { products } from '../assets/data/data.js';

export function getFilters(filterContainer) {
    const categories = ['todos', ...new Set(products.map(p => p.category))];
    const filterButtons = categories.map(category => `
        <button class="filter" data-category="${category}">${category}</button>
    `).join('');
    filterContainer.innerHTML = filterButtons;
}

export function getFullProducts(item) {
    return `
        <div class="product-container">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-container">
                <h5>${item.price}€</h5>
                <button class="add-button">Añadir</button>
            </div>
        </div>
    `;
}
