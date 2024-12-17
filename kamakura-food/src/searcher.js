//DEBE buscar los productos por los filtros

export function filterProducts(products, category, renderFilters) { 
    let filteredProduct = category === 'todos'
        ? products
        : products.filter(product => product.category === category);
    
    return filteredProduct.map(renderFilters).join('');
}


/*
import {getFullProducts} from "./menu.js"


// NO ME FUNCIONABA según padreGPT porque me faltaba establecer el inner en el menu.js (lo he que lo a cambiar). 
He tenido que añadir el parámetro de renderizar para poder aprovechar la función a futuro y que vaya.
Aquí es simplemente para que se ùeda añadir otro parámetro ahí y que sea utilizable, convirtiendolo a elementos HTML.

Me sigo informando xddddd



export function filterProducts(products, category, getFullProducts) {
    const filteredProduct = category === 'todos'
        ? products
        : products.filter(product => product.category === category);

    productContainer.innerHTML = filteredProduct.map(getFullProducts).join('');
}
*/


