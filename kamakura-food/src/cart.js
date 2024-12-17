//DEBE contener las funcionalidades del carrito de compras.

function addCartStyle() {
    let styleCart = document.createElement('style');
    styleCart.textContent = ` 
    #cart-container.open {
    display: flex;
    }`;
    document.head.appendChild(styleCart);
  }
  addCartStyle();
  
  let cartButton = document.getElementById('cart');
  let cartContainer = document.getElementById('cart-container');

  cartButton.addEventListener('click',() => {
          cartContainer.classList.toggle('open');
  });

  // funcion que actualiza el carrito
  function updateCartTotal() {
    const cartProducts = document.querySelectorAll(".cart-container"); //coger el contenedor del carrito
    let total = 0; //inicializar a cero el total

    cartProducts.forEach(product => { // bucle de productos de carrito
        const priceElement = product.querySelector(".text-container h5"); // cogemos el precio del elemento
        const price = parseFloat(priceElement.innerText.replace('€', '').trim()); // asegurarnos de que solo se obtiene el número

        const quantityElement = product.querySelector(".quantity"); // cogemos la cantidad
        const quantity = parseInt(quantityElement.innerText);

        total += price * quantity; // sumamos el precio * cantidad al total
    });

    // aseguramos que total es un número antes de actualizarlo
    document.getElementById("cart-total").innerText = `Total: €${total.toFixed(2)}`;
}

// añadir producto al carrito
export function addProductToCart(title, description, price) {
    const cartProductsContainer = document.getElementById("cart-products"); //cogemos el producto del contenedor del carrito

    // creamos el HTML del producto que se va a agregar al carrito
    const productElement = document.createElement("div");
    productElement.classList.add("cart-container");

    productElement.innerHTML = `
        <button class="close-button">
            <img src="./assets/img/close.svg" alt="close">
        </button>
        <div class="text-container">
            <h3>${title}</h3>
            <h5>${price}€</h5>
        </div>
        <div class="quantity-container">
            <button class="increase">+</button>
            <p class="quantity">1</p>
            <button class="decrease">-</button>
        </div>
    `;

    // añadimos el producto al contenedor del carrito
    cartProductsContainer.appendChild(productElement);

    // eliminar producto del carrito en el botón de x
    const closeButton = productElement.querySelector(".close-button");
    closeButton.addEventListener('click', () => {
        productElement.remove();
        updateCartTotal();
    });

    // añadir cantidad en el botón de más
    const increaseButton = productElement.querySelector(".increase");
    increaseButton.addEventListener('click', () => {
        const quantityElement = productElement.querySelector(".quantity");
        quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
        updateCartTotal();
    });

    // quitar cantidad en el botón menos
    const decreaseButton = productElement.querySelector(".decrease");
    decreaseButton.addEventListener('click', () => {
        const quantityElement = productElement.querySelector(".quantity");
        if (parseInt(quantityElement.innerText) > 1) {
            quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
            updateCartTotal();
        }
    });

    // llamamos a actualizar todo el carrito
    updateCartTotal();
}