var conexion = require("../conexionSQL/conection");
var element = require("../model/libro");

module.exports = {
  index: function (req, res) {
    element.gets(conexion, function (err, datos) {      
      res.json({libros: datos });
    });
  },
  guardar: function (req, res) {
    element.set(conexion, req.body,req.file, function (err) {      
      res.redirect('/libros/');
    });

  }
};
