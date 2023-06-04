const productoController = require('../controllers/productos.controller');
const provedoresController = require('../controllers/provedores.controller');
const recepcionController = require('../controllers/recepcionproductos.controller');

module.exports = (app) => {
   app.post('/api/productos/create', productoController.create);
   app.get('/api/productos/', productoController.list);
   app.put('/api/productos/:id', productoController.update);
   app.delete('/api/productos/:id', productoController.delete);
   app.post('/api/provedores/create', provedoresController.create);
   app.get('/api/provedores/', provedoresController.list);
   app.put('/api/provedores/:id', provedoresController.update);
   app.delete('/api/provedores/:id', provedoresController.delete);
   app.post('/api/recepcion/create', recepcionController.create);
   app.get('/api/recepcion/', recepcionController.list);
   app.put('/api/recepcion/:id', recepcionController.update);
   app.delete('/api/recepcion/:id', recepcionController.delete);
};