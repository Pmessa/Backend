//const NotesManager = require("./data/fs/NotesManager.js");
const NotesManager = require("./data/fs/NotesManager.js");
const ProductsManager = require("./data/fs/ProductsManager.fs.js");
const product = new ProductsManager()

async function router(req, res) {
  const url = req.url;
  console.log(url);
  const options = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      res.writeHead(200, options).end("API CONECTADA");
      break;
    case "/api/notes":
      const all = await product.read();
      res.writeHead(200, options).end(JSON.stringify(all));
      break;
    case "/index":
      res.writeHead(200, options).end("ESTA ES MI PAGINA INDEX");
      break;
    default:
      res.writeHead(404, options).end("RUTA NO ENCONTRADA");
      break;
  }
}
module.exports = router;
