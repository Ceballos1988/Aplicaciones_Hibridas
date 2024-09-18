import express from 'express';
import librosRoutes from './routes/librosRoutes.js';  
import autoresRoutes from './routes/autoresRoutes.js';  

const app = express();
const PORT = 3000;


app.use(express.json());

// Rutas principales

app.use('/api/libros', librosRoutes);  
app.use('/api/autores', autoresRoutes); 

// Ruta para manejar errores 404

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
