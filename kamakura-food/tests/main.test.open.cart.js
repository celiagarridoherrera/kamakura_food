import { describe, test } from "vitest";
import { JSDOM } from 'jsdom';

describe('Testing abrir y cerrar carrito de compras', () => {
  test('test abrir carrito cuando click en icono carrito', () => {

  }

};

// Escenario 3: Abrir y cerrar el carrito de compras
// Arrange
 // dato de entrada 
let cartButton = document.getElementById('cart');
  // dato de salida
let cartContainer = document.getElementById('cart-container');

// Act
  // Cuando hago clic en el icono del carrito de compras
function clickCartButton() {
  cartButton.click();
}

// Assert

  



// And 
  //Cuando vuelvo a hacer clic en el icono del carrito de compras



  
// Then 
  //El carrito de compras debería cerrarse