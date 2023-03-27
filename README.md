
# PROYECTO E-COMERCE 

Este proyecto esta pensado para una startup de impresión 3d.
Contiene productos impresos con este sistema.

## Contenido para el usuario:

- pagina de inicio que contiene las totalidad de productos
- dos paginas de listado de productos filtrados por categorias
- pagina de detalle de productos
- pagina de contenido de carrito de compras 
- pagina de formulario de contacto para checkout de compra 

## Listado de Componentes:

| Componente          | Descripcion                                                                |
|---------------------|----------------------------------------------------------------------------|
| App                 | Contiene las rutas y renderiza todas las paginas del sitio                 |
| ItemListContainer   | Hace la peticion a Firestore y maneja la logica para filtrar productos     |
| ItemList            | Recibe la lista de productos y los muestra usando "Item"                   |
| Item                | Contiene los elementos dentro de la card del producto y lleva a ItemDetail |
| Navbar              | Contiene todos los elementos de la barra superior y sus enlaces            |
| Item                | Contiene los elementos dentro de la card del producto y lleva a ItemDetail |
| ItemDetailContainer | Contiene la logica para mostrar un producto determinado                    |
| ItemDetail          | Renderiza el detalle del producto                                          |
| ItemCount           | Renderiza un contador dentro de ItemDetail                                 |
| CartContext         | Define el contexto, el provider y la logica del carrito                    |
| IconoCarrito        | Renderiza el iciono del carrito en el navbar                               |
| Cart                | Renderiza el carrito de compras                                            |
| ItemCarrito         | Contiene lo elementos que componen a cada item del carrito                 |
| ContactForm         | Renderiza un formulario para confirmar compra                              | 

## Funcionalidades

Inicio ("/")muestra la lista general de productos

En navbar, "Hogar" y "Figuras" llevan a esas categorias de productos ("/hogar y /figuras")

En navbar, el Icono del Carrito lleva al listado de productos en el carrito ("/cart")

Al hacer click en un producto de la lista, se renderiza el detalle del producto con 4 botones: uno para volver al listado general y seguir comprando, un par para elegir el numero de productos a agregar al carrito, y el ultimo para agregar el producto al carrito.

Al hacer click en "Agregar al carrito" se monta el boton "Ver tu carrito" si el usuario quiere finalizar la compra. Se desmonta el boton "Agregar al carrito".En las dos alternativas se mantiene la opcion de volver al listado con el boton "Seguir comprando".

Al hacer click en "Ver tu carrito" se renderiza el listado de productos agregados al carrito, con una imagen, titulo, cantidad, precio unitario y precio subtotal por producto. Ademas muestra el precio total y 3 botones. uno para seguir comprando, otro para confirmar la compra y el ultimo para limpiar el carrito

En "/cart", al hacer click en "Limpiar carrito", este se resetea y queda vacio. El contador superior tambien se recetea a cero.

En "/cart", al hacer click en "Confirmar compra", se renderiza un formulario ("/contactForm")

El formulario de "/contactForm", requiere ser llenado por el usuario para confirmar la compra. Una vez llenado, al hacer click en el boton "Enviar" se confirma la compra, ademas de devolver el id de la orden y el valor total de la compra.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

