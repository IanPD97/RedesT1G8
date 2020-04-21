# RedesT1G8

## Servidor SOAP
### Instalacion
Desde la carpeta principal del proyecto.
```
cd  ServidorSOAP
npm install
node app.js
```
El servidor confirmará el estado de ejecución.
### Conexion
Los clientes deben obtener el archivo WSDL de la direccion `http://localhost:8001/esquemaServicio?wsdl`
#### Digito verificador
El procedimiento para obtener el digito verificador se hace mediante la función `digitoVerificador()` el cual recibe como parametro un objeto `{ rut: <numero de  rut> }`, la función retorna un objeto `{ verificador: <digito verificador> }`, en caso de recibir un rut no valido retorna un error infromando el problema.
#### Nombre propio
El procedimiento para obtener un nombre propio se hace mediante la función `nombrePropio()` el cual recibe como parametro un objeto `{ sexo: <'M'/'F'>, nombre: <nombre>, apellidoPaterno: <apellido paterno>, apellidoMaterno: <apellido materno> }`, la función retorna un objeto `{ nombrePropio: <nombre propio> }`, en caso de recibir algún dato invalido retorna un error infromando el problema.
## Cliente SOAP
Cliente del servicio SOAP, permite usar las funcionalidades expuestas por el servicio en el servidor.
###Instalacion
```
cd frontend_soap
npm install
npm run serve
```
El cliente viene por defecto configurado para levantar la pagina web en la direccion `http://localhost:8080/ `