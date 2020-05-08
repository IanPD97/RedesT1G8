<template>
  <div id="app">
    <IngresarRUT v-on:ingresar-rut="ingresarRUT" />
    <RUT v-bind:rut="rut" />
    <IngresarNombre v-on:ingresar-nombre="ingresarNombre" />
    <NombreCompleto v-bind:nombreCompleto="nombreCompleto" />
  </div>
</template>

<script>
const soap = require("soap");
const url = "http://127.0.0.1:8001/esquemaServicio?wsdl";

import RUT from "../components/RUT";
import NombreCompleto from "../components/NombreCompleto";
import IngresarRUT from "../components/IngresarRUT";
import IngresarNombre from "../components/IngresarNombre";

export default {
  name: "Home",
  components: {
    IngresarRUT,
    RUT,
    IngresarNombre,
    NombreCompleto
  },
  data() {
    return {
      rut: {numero: "", valido: undefined},
      nombreCompleto: ""
    };
  },
  methods: {
    ingresarRUT(nuevoRUT) {
      digitoVerificador(nuevoRUT)(res => {
        this.rut.numero = nuevoRUT;
        this.rut.valido = res.verificador;
      });
    },
    ingresarNombre(nuevoNombre) {
      nombrePropio(nuevoNombre)(res => {
        this.nombreCompleto = res.nombrePropio;
      });
    }
  }
};

const digitoVerificador = numero => callback => {
  soap.createClient(url, (err, client) => {
    if (err) throw err;
    client.digitoVerificador({ rut: numero }, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  });
};

const nombrePropio = nombre => callback => {
  soap.createClient(url, (err, client) => {
    if (err) throw err;
    client.nombrePropio(nombre, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  });
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
