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


var app = express();
app.listen(8001, function () {
  soap.listen(app, '/esquemaServicio', servicio, xml, function () {
    console.log('server initialized');
  });
});