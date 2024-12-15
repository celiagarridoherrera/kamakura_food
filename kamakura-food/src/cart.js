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
  
  //DEBE contener las funcionalidades del carrito de compras.
  let cartButton = document.getElementById('cart');
  let cartContainer = document.getElementById('cart-container');
  
  //abrir carrito
  /* const cartMenu = document.querySelector(cart-menu); */
  //creación del propio botton en JS
  
  
  cartButton.addEventListener('click',() => {
          cartContainer.classList.toggle('open');
  });