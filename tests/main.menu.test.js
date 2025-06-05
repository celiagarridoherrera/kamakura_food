import { describe, test} from "vitest";
import { JSDOM } from 'jsdom';
import { getFilters, getFullProducts } from '../src/menu.js';
import { products } from '../assets/data/data.js';

describe('Test Menu', () => {
        let filterContainer;

        beforeEach(() => {
            document.body.innerHTML = `<div id="filters"></div>`;
            filterContainer = document.getElementById('filters');
        });
    
        test('show filters correctly', () => {
            getFilters(filterContainer);
       
        const buttons = filterContainer.querySelectorAll('button');
    
        const expectedCategories = ['todos', ...new Set(products.map(p => p.category))];
        expect(buttons.length).toBe(expectedCategories.length);
    
            expectedCategories.forEach((category, index) => {
                expect(buttons[index].textContent).toBe(category); 
                expect(buttons[index].dataset.category).toBe(category);
            });
        });
    
        test('show product correctly', () => {
            const sampleProduct = products[0]; 
            const productHTML = getFullProducts(sampleProduct);
    
            const container = document.createElement('div');
            container.innerHTML = productHTML;
    
            const productName = container.querySelector('h3').textContent;
            const productDescription = container.querySelector('p').textContent;
            const productPrice = container.querySelector('.price-container h5').textContent;
    
            expect(productName).toBe(sampleProduct.name);
            expect(productDescription).toBe(sampleProduct.description); 
            expect(productPrice).toBe(`${sampleProduct.price}€`); 
        });
    });
    
    
    
    