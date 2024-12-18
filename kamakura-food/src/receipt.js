
document.addEventListener('DOMContentLoaded', () => {

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    let receiptContainer = document.getElementById('receipt-container');
    let receiptProduct = document.getElementById('receipt-product');
    let receiptTotal = document.getElementById('receipt-total');
    let proceedPayButton = document.getElementById('proceedPay-button');
    let payButton = document.getElementById('pay-button');
    let closeReceiptButton = document.getElementById('close-receipt');

    function createReceipt() {
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

    proceedPayButton.addEventListener('click', createReceipt);
    payButton.addEventListener('click', () => {
        alert('¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!');
        localStorage.removeItem('cartItems');
        location.reload();
    });
    closeReceiptButton.addEventListener('click', () => {
        receiptContainer.style.display = 'none';
    });
});