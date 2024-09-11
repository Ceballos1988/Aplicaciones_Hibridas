//Parte 1
//Importar express en una variable inmutable llamada express.
import express from 'express';
const app = express();

//Crear un servidor web que escuche el puerto 3000.
const PORT = 3000;

// "/" Debe mostrar su nombre y apellido. 
app.get('/', (req, res) => {
  res.send('María Milagros Ceballos');
});

// "/materia"; Debe mostrar la información de la materia.
app.get('/materia', (req, res) => {
  res.send('Aplicaciones Híbridas.');
});

// "/profesor"; Debe mostrar la información del profesor.
app.get('/profesor', (req, res) => {
  res.send('Camila Belen MARCOS GALBAN.');
});



//Parte 2

// Armar un array con 5 películas de su preferencia.
const peliculasFavoritas = ['Matrix', 'Crepúsculo', 'Titanic', 'Avatar', 'Twister'];


// /peliculas debe recibir POR PARÁMETRO una película:
app.get('/peliculas/:nombre', (req, res) => {
  const pelicula = req.params.nombre;


  if (peliculasFavoritas.includes(pelicula)) {
    //Si está en su array, se debe enviar como respuesta “la película seleccionada ya está en favoritos”.
    res.send('La película seleccionada ya está en favoritos');
  } else {
    //Si no se encuentra, se debe enviar como respuesta “404 – película no encontrada”.
    res.status(404).send('404 – película no encontrada');
  }
});


//Parte 3

// Agregar una URL llamada /productos; que muestre un listado de 10
//productos (id, nombre, precio).
  
// Para la misma url, debo tener la posibilidad de recibir un id por parámetro y
//responder sólo con la información del producto solicitado.
//También debe estar la posibilidad de recibir en la misma url los query &quot;min&quot;
//y &quot;max&quot; con un valor numérico. Utilizando esos query, retornar los
//productos que entren en ese rango de precios (se podría recibir sólo una de
//las dos query o ambas).

const productos = [
    { id: 1, nombre: 'Tomate', precio: 100 },
    { id: 2, nombre: 'Lechuga', precio: 150 },
    { id: 3, nombre: 'Zanahoria', precio: 200 },
    { id: 4, nombre: 'Papa', precio: 250 },
    { id: 5, nombre: 'Batata', precio: 300 },
    { id: 6, nombre: 'Zapallo', precio: 350 },
    { id: 7, nombre: 'Rúcula', precio: 400 },
    { id: 8, nombre: 'Sandia', precio: 450 },
    { id: 9, nombre: 'Pera', precio: 500 },
    { id: 10, nombre: 'Cebola', precio: 550 }
  ];

  app.get('/productos', (req, res) => {
    const { id, min, max } = req.query;
  
    if (id) {
      const producto = productos.find(p => p.id === parseInt(id));
      if (producto) {
        return res.json(producto);
      } else {
        return res.status(404).send('Producto no encontrado');
      }
    }
  

    let productosFiltrados = productos;
    if (min) {
      productosFiltrados = productosFiltrados.filter(p => p.precio >= parseFloat(min));
    }
    if (max) {
      productosFiltrados = productosFiltrados.filter(p => p.precio <= parseFloat(max));
    }
  
    res.json(productosFiltrados);
  });
  
// para ver los productos es http://localhost:3000/productos?id=1
// si quiero filtrado http://localhost:3000/productos?min=200&max=400
// si quiero precio sea mayor o igual a 300 http://localhost:3000/productos?min=300


// SE PONE AL FINAL PORQUE SINO NO LO LEE LO QUE ESTA LUEGO


// cualquier otra url ; Debe mostrar un mensaje de página no encontrada.
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
  });
  
  //llamamos al port
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
  
  