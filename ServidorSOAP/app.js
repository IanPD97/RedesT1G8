const soap = require('soap');
const xml = require('fs').readFileSync('esquemaServicio.wsdl', 'utf8');
const express = require('express');

const { verificarDigito, generarNombrePropio } = require('./modules/servicios');

const error = (nombreFuncion, subCodigo, texto) => {
  throw {
    Fault: {
      Code: {
        Value: nombreFuncion,
        Subcode: { value: subCodigo }
      },
      Reason: { Text: texto }
    }
  };
}

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

const puerto = 8001;

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, soapaction, Accept");
  next();
});

app.listen(puerto, function () {
  soap.listen(app, '/esquemaServicio', servicio, xml, function () {
    console.log('servidor iniciado en puerto:', puerto);
  });
});