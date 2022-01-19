module.exports={
    gets:function (conexion, funcion){
        conexion.query("SELECT * FROM libros", funcion);
    },
    set:function (conexion, datos, file, funcion){
        conexion.query("INSERT INTO libros (nombre, imagen) VALUES (?,?)",[datos.nombre, file.filename], funcion);
    }
}