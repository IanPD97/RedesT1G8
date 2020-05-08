const express = require('express');

const { verificarDigito, generarNombrePropio } = require('./modules/servicios');


let servicio = {
  servicio: {
    puerto: {
      digitoVerificador: ({ rut }) => {
        if (rut === null) error('digitoVerificador', 'rpc:BadArguments', 'Rut invalido');
        return verificarDigito({ rut });
      },
      nombrePropio: ({ sexo, nombre, apellidoPaterno, apellidoMaterno }) => {
        if (nombre === null
          || apellidoPaterno === null
          || apellidoMaterno === null
          || sexo === null) error('saludo', 'rpc:BadArguments', 'Al menos un parametro es invalido');
        return generarNombrePropio({ sexo, nombre, apellidoPaterno, apellidoMaterno });
      }
    }
  }
};

const puerto = 8003;

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(express.json())

app.post('/verificarRUT', (req, res) => {
  if (req.body.rut === undefined) {
    console.log("ERROR GET sin rut para digito verificador");
    res.status(400).send('No se envió RUT');
  }
  else {
    res.send(verificarDigito(req.body));
  }
});

app.post('/nombrePropio', (req, res) => {
  const datos = req.body;
  console.log(req.body);
  
  if (datos.nombre === undefined || datos.apellidoPaterno === undefined || datos.apellidoMaterno === undefined || datos.sexo === undefined) {
    console.log("ERROR GET sin datos necesarios para generar nombre propio");
    res.status(400).send('No se enviaron parametros necesarios (nombre, apellido paterno, apellido materno y sexo)');
  }
  else {
    res.send(generarNombrePropio(datos));
  }
});

app.listen(puerto, function () {
  console.log('servidor iniciado en puerto:', puerto);
});