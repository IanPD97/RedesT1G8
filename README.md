# REST

## Descarga del servidor Wamp o Xampp

- Se debe descargar un servidor Wamp o xampp para poder correr código php, configurarlo adecuadamente, aquí un enlace a un tutorial de instalación de servidor Wamp para windows. Enlace: https://www.youtube.com/watch?v=n6CVi4pBSCE (1) Descargar una versión para php desde la 5.4.3 en adelante.
- Tener presente la carpeta en donde se guardará el servidor, se recomienda en el disco local C
- Poner google Chrome como navegador por defecto
- En caso de que el servidor arroje problemas con el puerto utilizado, en el mismo tutorial de instalación sugerido (1), aparece el método de solución a dicho problema.

## Para abrir los archivos php y html de REST

- Una vez instalado el servidor aparecerá una carpeta con el nombre en el disco C, ya sea wamp o xampp, dentro de esta carpeta hay otra con el nombre "www", ahí es donde se deben dejar los proyectos.
- Descargamos el repositorio de github a nuestra máquina local.
- Dejamos la carpeta "2020 REST" en la carpeta "www" del servidor descargado.
- Entonces para acceder al servidor REST se debe ingresar el URL en el buscador: http://localhost/2020%20REST/servidor.php
- Para ingresar a los clientes se deben ingresar los siguientes enlaces al buscador:
- Para el cliente del servisio nombres: http://localhost/2020%20REST/ClienteRest_nombre.html
- Para el cliente del servicio ruts: http://localhost/2020%20REST/ClienteRest_rut.html


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
### Instalacion
Desde la carpeta principal del proyecto.
```
cd frontend_soap
npm install
npm run serve
```
### Ejecución
El cliente viene por defecto configurado para levantar la pagina web en la direccion `http://localhost:8080/ `
