import { products } from '../assets/data/data.js';

//DEBE imprimir en pantalla la información de filtros.

function getFilterCategories(products) {
    let categories = products.map(product => product.category);
    return ['todos', ...new Set(categories)];
}

function getFilters(filterContainer) {
    let categories = getFilterCategories(products);
    let filterButtons = categories.map(category => `
        <button class="filter" data-category="${category}">${category}</button>
    `).join('');
    filterContainer.innerHTML = filterButtons;
}

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

function getFullProducts(item) {
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

export {getFilters, getFullProducts};