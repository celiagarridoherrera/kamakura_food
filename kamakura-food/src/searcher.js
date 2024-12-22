export function filterProducts(products, category, renderFilters) { 
    let filteredProduct = category === 'todos'
        ? products
        : products.filter(product => product.category === category);
    
    return filteredProduct.map(renderFilters).join('');
}


