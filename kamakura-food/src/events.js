
import {products} from '../assets/data/data.js'
import { getFullProducts } from './menu.js';
//Intenta separar los eventos en este archivo.

function init() {    
    getFullProducts(products);
    initCart();
}

init();