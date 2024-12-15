import { products } from '../assets/data/data.js';
import { filterProducts } from './searcher.js';

//DEBE imprimir en pantalla la información de filtros.

const filterContainer = document.getElementById('filters');
const productContainer = document.getElementById('products');

// Obtener solo 1 categoría
function getFilterCategories(products) {
    const categories = products.map(product => product.category);
    return ['todos', ...new Set(categories)]; 
}

// Mostrar los filtros

function getFilters() {
    const categories = getFilterCategories(products);
    const filterButtons = categories.map(category => `
        <button class="filter" data-category="${category}">${category}</button>
    `).join('');
    filterContainer.innerHTML = filterButtons;
    // Llamar a los botones por separado
    const filterButtonsElements = document.querySelectorAll('.filter');
    filterButtonsElements.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const filteredProducts = filterProducts(products, category, getFullProducts); // Estas dos líneas también están cambiadas para adaptarlo, por eso no funcionaba
            productContainer.innerHTML = filteredProducts; // Soy poco original con los nombres, lo sé puede haber lío porque en searcher es filteredProduct (:
        });
    });
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

// Llamadas para que se muestre todo (Tal vez deberíamos ir planteándonos eso de ir cambiando a events.js)
getFilters();
productContainer.innerHTML = filterProducts(products, 'todos', getFullProducts); // Lo he tenido que cambiar para que funcione, si os fijais se reemplaza el 'render' por la función que queremos