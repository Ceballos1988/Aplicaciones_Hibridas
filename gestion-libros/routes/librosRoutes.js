import express from 'express';

const router = express.Router();

// Ruta para obtener todos los libros get

router.get('/', (req, res) => {
  res.send('Lista de libros');
});

// Ruta para obtener un libro por ID get

router.get('/:id', (req, res) => {
  res.send(`Libro con ID: ${req.params.id}`);
});

// Ruta para crear un nuevo libro post

router.post('/', (req, res) => {
  res.send('Libro creado');
});

// Ruta para actualizar un libro put

router.put('/:id', (req, res) => {
  res.send(`Libro con ID: ${req.params.id} actualizado`);
});

// Ruta para eliminar un libro dewlete

router.delete('/:id', (req, res) => {
  res.send(`Libro con ID: ${req.params.id} eliminado`);
});

export default router;
