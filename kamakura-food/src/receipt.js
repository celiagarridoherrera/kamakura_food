let receiptContainer;
let receiptProduct;
let receiptTotal;

document.addEventListener('DOMContentLoaded', () => {
    receiptContainer = document.getElementById('receipt-container');
    receiptProduct = document.getElementById('receipt-product');
    receiptTotal = document.getElementById('receipt-total');
});

function createReceipt() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    if (Object.keys(cartItems).length === 0) {
        alert("El carrito está vacío. Agrega productos antes de ver el recibo.");
        return;
    }

    receiptProduct.innerHTML = '';

    let total = 0;

    Object.entries(cartItems).forEach(([title, { price, quantity }]) => {
        let subtotal = parseFloat(price.replace('€', '')) * quantity;
        total += subtotal;

        let receiptProductItem = document.createElement('div');
        receiptProductItem.classList.add('receipt-product');
        receiptProductItem.innerHTML = `
            <h3>${title}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${quantity}</p>
                <h5>Subtotal: ${subtotal.toFixed(2)}€</h5>
            </div>
        `;
        receiptProduct.appendChild(receiptProductItem);
    });

    receiptTotal.textContent = `Total: ${total.toFixed(2)}€`;
    receiptContainer.style.display = 'flex';
}

function handlePay() {
    alert('¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!');
    localStorage.removeItem('cartItems'); // Vaciar el carrito
    location.reload(); // Recargar la página
}

function handleCloseReceipt() {
    receiptContainer.style.display = 'none';
}

export {
    createReceipt,
    handlePay,
    handleCloseReceipt
};