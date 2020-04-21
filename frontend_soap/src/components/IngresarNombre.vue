<template>
  <div class="ingresar-nombre">
    <div>
      <p>Ingrese sexo, nombre(s), apellido paterno y apellido materno</p>
    </div>
    <form @submit.prevent="ingresarNombre">
      <input type="text" v-model="sexo" name="sexo" placeholder="Ingrese sexo..." />
      <input type="text" v-model="nombre" name="nombre" placeholder="Ingrese nombres..." />
      <input type="text" v-model="apellidoPaterno" name="paterno" placeholder="Ingrese ap Paterno..." />
      <input type="text" v-model="apellidoMaterno" name="materno" placeholder="Ingrese ap Materno..." />
      <input type="submit" value="Ingresar" class="btn" />
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: "IngresarNombre",
  data() {
    return {
      sexo: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: ""
    };
  },
  methods: {
    ingresarNombre() {
      if (this.sexo === "") return;
      if (this.nombre === "") return;
      if (this.apellidoPaterno === "") return;
      if (this.apellidoMaterno === "") return;
      const nuevoNombre = {
        sexo: this.sexo,
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno
      };
      this.$emit("ingresar-nombre", nuevoNombre);
      this.title = "";
    }
  }
};
</script>

<style scoped>
.ingresar-nombre {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>


