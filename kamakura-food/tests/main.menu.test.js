import { describe, test} from "vitest";
import { JSDOM } from 'jsdom';
import { getFilters, getFullProducts } from '../src/menu.js';
import { products } from '../assets/data/data.js';

describe('Test Menu', () => {
        let filterContainer;
    
        /**Configuración inicial del DOM antes de cada prueba
         * 
         *1- Agrupar las pruebas relacionadas el beforeEach se va a ejecutar antes de cada prueba para configurar el DOM simulado 
         * y crea un contenedor vacío (<div id="filters"></div>) donde se probarán las funciones.
         **/ 

        beforeEach(() => {
            document.body.innerHTML = `<div id="filters"></div>`;
            filterContainer = document.getElementById('filters');
        });
    
        /*Test del Menu*/
    
        /**Paso a Paso:
        getFilters(filterContainer): 
        Llama a la función getFilters pasando el contenedor de filtros.
        Genera correctamente botones  para cada categoría de los productos.   
         **/   
    
        test('show filters correctly', () => {
            getFilters(filterContainer);
    
        //Extraer los botones generados:Obtiene todos los botones creados dentro de filterContainer.      
        const buttons = filterContainer.querySelectorAll('button');
    
        /**Verifica que el número de botones sea igual a las categorías únicas + 'todos'
        expectedCategories: Contiene 'todos' más las categorías únicas de los productos.
        Compara el número de botones generados con el número esperado de categorías.
         **/ 
        const expectedCategories = ['todos', ...new Set(products.map(p => p.category))];
        expect(buttons.length).toBe(expectedCategories.length);
    
        // Verifica que cada botón tiene la categoría correcta
            expectedCategories.forEach((category, index) => {
                expect(buttons[index].textContent).toBe(category); // El texto del botón debe coincidir con la categoría
                expect(buttons[index].dataset.category).toBe(category); // El atributo data-category debe coincidir
            });
        });
    
        // Prueba: Renderización de un producto. genera correctamente el HTML de un producto.
        test('show product correctly', () => {
            const sampleProduct = products[0]; // Selecciona un producto de ejemplo
            const productHTML = getFullProducts(sampleProduct);
    
            // Simula un contenedor para renderizar el producto
            const container = document.createElement('div');
            container.innerHTML = productHTML;
    
            // Comprueba que los elementos del producto se generaron correctamente
            const productName = container.querySelector('h3').textContent;
            const productDescription = container.querySelector('p').textContent;
            const productPrice = container.querySelector('.price-container h5').textContent;
    
            expect(productName).toBe(sampleProduct.name); // Verifica el nombre
            expect(productDescription).toBe(sampleProduct.description); // Verifica la descripción
            expect(productPrice).toBe(`${sampleProduct.price}€`); // Verifica el precio
        });
    });
    
    
    
    