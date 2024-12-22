import { describe, test } from "vitest";
import { JSDOM } from 'jsdom';

describe('Testing abrir y cerrar carrito de compras'), () => {
  test('test abrir carrito cuando click en icono carrito'), () => {

  }

};


let cartButton = document.getElementById('cart');
let cartContainer = document.getElementById('cart-container');

function clickCartButton() {
  cartButton.click();
}