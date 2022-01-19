var conexion = require("../conexionSQL/conection");
var element = require("../model/libro");

module.exports = {
  index: function (req, res) {
    element.gets(conexion, function (err, datos) {      
      res.json({libros: datos });
    });
  },
  add: function (req, res) {
    element.set(conexion, req.file, req.body, function (err) {      
      const file = req.file;

      console.log(req.body);

      
      if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
      }
      res.send(file);
    
    });
  }
};
