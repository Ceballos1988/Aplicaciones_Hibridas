import express from 'express';

const router = express.Router();

// Ruta para obtener todos los autores get

router.get('/', (req, res) => {
  res.send('Lista de autores');
});

// Ruta para obtener un autor por ID get

router.get('/:id', (req, res) => {
  res.send(`Autor con ID: ${req.params.id}`);
});

// Ruta para crear un nuevo autor get 

router.post('/', (req, res) => {
  res.send('Autor creado');
});

// Ruta para actualizar un autor put

router.put('/:id', (req, res) => {
  res.send(`Autor con ID: ${req.params.id} actualizado`);
});

// Ruta para eliminar un autor delete
 
router.delete('/:id', (req, res) => {
  res.send(`Autor con ID: ${req.params.id} eliminado`);
});

export default router;
