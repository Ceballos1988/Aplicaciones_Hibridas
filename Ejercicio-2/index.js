const http = require("http");
const fs = require("fs");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido a la clase de Aplicaciones Híbridas");
    
  } else if (url === "/alumno" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Nombre del Alumno: María Milagros Ceballos, Comisión: DWN4AP");
    
  } else if (url === "/info" && method === "GET") {
    const info = {
      platform: os.platform(),
      release: os.release(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(info));
    
  } else if (url === "/static" && method === "GET") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Archivo no encontrado");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
    
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
