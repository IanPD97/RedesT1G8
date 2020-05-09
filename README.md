# Trabajo 1 Grupo 8

### Integrantes
- Iván Pérez
- Sebastián Pérez
- Ian Poveda
- Claudio Silva

# Requisitos de funcionamiento
Ambos servidores y el cliente SOAP requieren `Node JS` instalado en el equipo para su funcionamiento, link de [descarga](https://nodejs.org/es/download/).

# REST

## Servidor REST

### Instalación
Desde la carpeta principal del proyecto.
```
cd ServidorREST  
npm install  
node app.js
```
El servidor confirmará el estado de ejecución.
### Conexión

#### Digito verificador
Los clientes deben hacer POST a `/verificarRUT` con el siguiente esquema JSON `{rut: <RUT>}`, el procedimiento retorna un objeto `{ verificador: <true|false> }`, en caso de recibir un RUT no valido retorna un error informando el problema.

#### Nombre propio
Los clientes deben hacer POST a `/nombrePropio` con el siguiente esquema JSON `{ sexo: <'M'/'F'>, nombre: <nombre>, apellidoPaterno: <apellido paterno>, apellidoMaterno: <apellido materno> }`, el procedimiento retorna un objeto `{ nombrePropio: <nombre propio> }`, en caso de recibir algún dato invalido retorna un error informando el problema.

## Ejecución
Desde la carpeta principal del proyecto copiar y pegar la carpeta `2020 REST` en la ruta: C:\wamp\www del servidor wamp o xampp, luego
copiar la siguiente ruta en el navegador http://localhost/2020%20REST/ClientesRest.html, para abrir el cliente Rest.

# SOAP

## Servidor SOAP

### Instalación
Desde la carpeta principal del proyecto.
```
cd  ServidorSOAP  
npm install  
node app.js
```
El servidor confirmará el estado de ejecución.

### Conexión
Los clientes deben obtener el archivo WSDL de la dirección `http://localhost:8001/esquemaServicio?wsdl`.

#### Digito verificador
El procedimiento para obtener el digito verificador se hace mediante la función `digitoVerificador()` el cual recibe como parámetro un objeto `{ rut: <RUT> }`, la función retorna un objeto `{ verificador: <true|false> }`, en caso de recibir un RUT no valido retorna un error informando el problema.

#### Nombre propio
El procedimiento para obtener un nombre propio se hace mediante la función `nombrePropio()` el cual recibe como parámetro un objeto `{ sexo: <'M'/'F'>, nombre: <nombre>, apellidoPaterno: <apellido paterno>, apellidoMaterno: <apellido materno> }`, la función retorna un objeto `{ nombrePropio: <nombre propio> }`, en caso de recibir algún dato invalido retorna un error informando el problema.

# Cliente SOAP
Cliente del servicio SOAP, permite usar las funcionalidades expuestas por el servicio en el servidor.

### Instalación y ejecución
Desde la carpeta principal del proyecto.
```
cd frontend_soap
npm install
npm run serve
```

### Ejecución
El cliente viene por defecto configurado para levantar la pagina web en la dirección `http://localhost:8080/ `

