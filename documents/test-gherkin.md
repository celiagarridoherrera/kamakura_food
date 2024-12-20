# Feature/Funcionalidades del menú y carrito de compras de Kamakura Food
  
  ## Escenario 1: Mostrar los platos del menú
    ### Given
      Estoy en la página principal
    ### When
      La página se carga
    ### Then
      Debería ver una lista de platos generados dinámicamente
    ### And
      Cada plato debería mostrar su imagen, nombre, descripción y precio

  ## Escenario 2: Mostrar las categorías del menú
    ### Given 
      Estoy en la página principal
    ### When
      La página se carga
    ### Then
      Debería ver una lista de categorías generadas dinámicamente
    ### And
      Al hacer clic en una categoría, debería mostrar solo los platos pertenecientes a esa categoría

  ## Escenario 3: Abrir y cerrar el carrito de compras
    ### Given
      Estoy en la página principal
    ### When
      Hago clic en el icono del carrito de compras
    ### Then
      El carrito de compras debería abrirse
    ### And 
      Cuando vuelvo a hacer clic en el icono del carrito de compras
    ### Then 
      El carrito de compras debería cerrarse

  ## Escenario 4: Añadir un plato al carrito de compras
    ### Given
      Estoy viendo una lista de platos
    ### When 
      Hago clic en el botón "Añadir" de un plato
    ### Then 
      El plato debería aparecer en el carrito de compras
    ### And 
      El plato no debería duplicarse si lo añado nuevamente

  ## Escenario 5: Eliminar un plato del carrito de compras
    ### Given
      Tengo platos en el carrito de compras
    ### When
      Hago clic en el botón "x" junto a un plato
    ### Then 
      El plato debería eliminarse del carrito de compras

  ## Escenario 6: Actualizar la cantidad y el precio total en el carrito de compras (Bonus)
    ### Given
      He añadido platos al carrito de compras
    ### When 
      Actualizo la cantidad de un plato
    ### Then 
      El subtotal para ese plato debería actualizarse
    ### And 
      El precio total del carrito debería actualizarse en consecuencia

  ## Escenario 7: Proceder al pago (Bonus)
    ### Given 
      He añadido platos al carrito de compras
    ### When
      Hago clic en el botón "Proceder al pago"
    ### Then
      Debería abrirse un modal mostrando un recibo con:
      | Nombre del Plato | Cantidad | Precio | Subtotal |
    ### And 
      El precio total del carrito debería mostrarse

  ## Escenario 8: Reiniciar carrito y modal tras cerrarlos (Bonus)
    ### Given 
      He completado una compra y el modal está abierto
    ### When
      Cierro el modal
    ### Then
      El carrito de compras y el modal deberían vaciarse
    ### And
      La aplicación debería reiniciarse a su estado inicial

  ## Escenario 9: Uso de estilos y JavaScript moderno
    ### Given 
      La aplicación está funcionando
    ### When
      Inspecciono el código
    ### Then
      Los estilos deberían seguir el CSS predefinido
    ### And 
      Se deberían usar características modernas de JavaScript como map, filter y template string