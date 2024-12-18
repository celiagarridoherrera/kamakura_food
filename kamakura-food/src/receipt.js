//Aquí intenta poner las funcionalidades del recibo
import { cartItems } from './cart';

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

function createReceipt() {
    let receiptContainer = document.getElementById('receipt-container');
    let receiptProduct = document.getElementById('receipt-product');
    let receiptTotal = document.getElementById('receipt-total');
    let proceedPayButton = document.getElementById('proceedPay-button');
    let payButton = document.getElementById('pay-button');
    let closeReceiptButton = document.getElementById('close-receipt');
}

//Vaciamos el contenido
receiptProduct.innerHTML = '';

//Verificamos si el carrito esta vacio

if (Object.keys(cartItems).length === 0) {
    alert("El carrito está vacío. Agrega productos antes de ver el recibo");
    return;
}

let total = 0;

//Crear recibo
Object.entries(cartItems).forEach(([title, { price, quantity }]) => {
    let subtotal = parseFloat(price.replace('€', '')) * quantity;
    total += subtotal;

    let receiptProductItem = document.createElement('div');
    receiptProductItem.classListList.add('receipt-product');
    receiptProductItem.innerHTML = `
     <h3>${title}</h3>
     <div class="receipt-price">
        <p>Cantidad: ${quantity}</p>
        <h5>Subtotal: ${subtotal.toFixed(2)}€</h5>
     </div>
     `;

     receiptProduct.appendChild(receiptProductItem);

});

// Mostrar total
receiptTotal.textContent = `Total: ${total.toFixed(2)}€`;

  // Mostrar el contenedor de recibo
  receiptContainer.style.display = 'flex';


// Eventos de botones
proceedPayButton.addEventListener('click', () => {
    receiptContainer.style.display = 'flex';
});  
payButton.addEventListener('click', () => {
    alert('¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!');
    localStorage.removeItem('cartItems');
    location.reload();
});

closeReceiptButton.addEventListener('click', () => {
    receiptContainer.style.display = 'none';
});

// Evento para generar recibo
document.getElementById('proceedPay-button').addEventListener('click', createReceipt);

export { createReceipt };