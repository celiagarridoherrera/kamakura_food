# Proyecto: Kamakura Food

## Table of Contents
1. [Responsables](#responsables)
2. [Objetivos del proyecto](#objetivos-del-proyecto)
3. [MVP](#MVP)
4. [Repositorio](#repositorio)
5. [Instrucciones](#instrucciones-de-uso-del-repositorio)
6. [Uso Kamakura Food web (video)](#uso-kamakura-food-web)
7. [Métodos de trabajo](#métodos-de-trabajo)

## **Responsables:**

- **Equipo: Los Ramenáticos**

- **Integrantes**
  - Erica Montesinos: Product Owner/Developer
  - Celia Garrido: Scrum Master/Developer
  - Jose Romero: Developer
  - Lanny Rivero: Developer
  - Lidia Gonzalez-tablas: Developer
    
## **Objetivos del proyecto**

Kamakura Food tiene como objetivo proporcionar una experiencia interactiva al explorar un menú dinámico de comida japonesa para mejorar la experiencia de compra del usuario. Este proyecto pone en práctica habilidades en manipulación del DOM, programación funcional, y manejo de eventos.

## **Funcionalidades pactadas**

Desarrollo de la lógica y las funcionalidades de la página "Kamakura Food":
- Generar dinámicamente los botones de categoría y filtrar los platos del menú al hacer clic en ellos.
- Mostrar Platos: Imprimir dinámicamente los platos en el DOM siguiendo el diseño estático proporcionado.
- Carrito de Compras: Abrir y cerrar el carrito, añadir platos evitando duplicados, y permitir eliminarlos con un botón "x".
- Gestión de Contadores : Ajustar cantidades, calcular subtotales por plato y un total general del carrito.
- Recibo de Compra : Mostrar un modal con el recibo detallado al proceder al pago y limpiar carrito y recibo al cerrarlo.
- Testeo Unitario: Validar filtros, impresión de platos, funcionalidad del carrito, cálculos, y generación del recibo mediante pruebas.
  
## **MVP**

El MVP de de Kamakura Food consiste en un menú dinámico con filtros por categoría y un carrito básico que permite añadir platos sin duplicados, eliminar elementos, y abrir/cerrar el carrito al hacer clic. Esto asegura una funcionalidad mínima para explorar el menú e interactuar con el carrito.

## **Características Técnicas**

Lista de tecnologías utilizadas en el proyecto:
- HTML/CSS/JavaScript: Base del proyecto.
- ESModules: Separación de lógica y funcionalidades en archivos modulares.
- Vitest y jsdom: Testing unitario para funcionalidades del DOM.
- Trello: Backlog
- Miró: Diagramas de flujo

## **Repositorio**

El enlace al repositorio es: [https://github.com/celiagarridoherrera/kamakura_food.git](https://github.com/celiagarridoherrera/google_store_proyect.git)

### Contenido

- kamakura-food
  - assets
    - data
       - data.js
       - img
         - cart.svg
         - close.svg
         - logo.svg
  - node_modules
  - src
    - cart.js
    - events.js
    - menu.js
    - receipt.js
    - searcher.js
  - styles
    - cart.css
    - menu.css
  - tests
    - app.test.js
    - setup.js
  - .gitignore
  - index.html
  - Instructions.md
  - package-lock.json
  - package.json
  - vite.config.js
- package-lock.json
- README.md

## **Instrucciones de uso del repositorio**

1. Clonar el repositorio
Usa el siguiente comando para clonar el repositorio en tu ordenador:
`git clone <URL-DEL-REPOSITORIO>`

3. Acceder al proyecto
Cambia al directorio del proyecto:
`cd kamakura-food`

4. Instalar dependencias
Asegúrate de tener Node.js instalado y ejecuta:
bash
`npm install`

5. Ejecutar la aplicación
Abre el archivo index.html en tu navegador o utiliza una extensión como Live Server en VS Code para ejecutar un servidor local.

6. Correr los tests
Usa el siguiente comando para ejecutar las pruebas automatizadas con Vitest:
`npm test`

## **Uso Kamakura Food (web)**
[Demo video](/documents/Kamakura%20Food%20demo%20video.mp4)

# **Métodos de trabajo**

## **WorkFlow**
[Enlace a Miró del WorkFlow](https://miro.com/welcomeonboard/WjlaaUtMay9yS2UyeWdncTlwQUt3VFNJNTZ0YVR6Q2RRMUZCdjdjUVV1ZWFyNG1SakJRRkNJTHJTWmc1VkhQQTRJTnVlWE80cHgxSmVIV2oyNjBwRmZxRUt0ZTdkYmlkajMvTHIrSE5NM3pQU3VVbWJmSEg1c2dHcEkxTThyT28hZQ==?share_link_id=461635771190) [WorkFlow](/documents/WorkFlow.jpg)

## **Informe de las tareas**
[Enlace a Trello informe de las tareas del equipo](https://trello.com/invite/b/67584d91c232fe2fa8053c84/ATTIe056da48199a714d54f5a352d24cf0b7A27684CF/kamakura-food)

## **UserFlow**
[Enlace a Miró "kamakura UserFlow"](https://miro.com/welcomeonboard/aWpaMjVMSnhjMDE1M084NGhYV0gxUFNodXhwWUxnUk4xSEs4bTY2QVF6SjMxMjhCV3FRemxBdXF3UEpveTlPeHpUdWtqTlhmNGR6aXR5QzBLK2tZaGZxRUt0ZTdkYmlkajMvTHIrSE5NM3pQU3VVbWJmSEg1c2dHcEkxTThyT28hZQ==?share_link_id=417388823871)
[UserFlow](/documents/UserFlow.jpg)

## **Historias de usuario**

[Enlace a Miró "kamakura User Stories"](https://miro.com/app/board/uXjVL2tS62A=/?share_link_id=149104589538)
[UserStories](/documents/kamakura%20User%20Stories.jpg)

## **Test Gherkin**

![Test Gherkin](/documents/test-gherkin.md)
