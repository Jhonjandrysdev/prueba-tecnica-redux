# Prueba Técnica de React con Redux

Tu descripcion

## Requisitos Previos

Que tecnologías fueron necesarias

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instrucciones

Sigue estos pasos para completar la prueba técnica:

1. Clona este repositorio en tu máquina local:

  bash
   git clone https://github.com/Jhonjandrysdev/prueba-tecnica-redux.git

cd prueba-react-redux
npm install


## Resumen

1. Se realizo una pagina principal con un formulario trabajado con TailwindCss y una auth con los metodos de registro y salida de usuario de Firebase.
2. Se implemento axios en la carpeta pages/PostsLists.jsx para poder consumir una API, omitiendo los metodos JSON.
3. Tambien se implemento redux en PostLists.jsx para un manejo global de estado, la cual permitio actualizar datos y ejecutar almacenadas en publicSlice.js como AddPosts y SeePosts.
4. Se configuro el componente App en el archivo main.jsx; donde se encapsulo el componente con un provider pasandole el parametro store para que tomara todos los valores o campos que tenga en este caso publications; La cual se encuentra configurada con su estado inicial y funciones en el archivo publicSlice.js
5. Se intento almacenar la API con los nuevos datos en el localStorage, pero fue imposible debido al desconocimiento de herramientas o tematicas de redux.
