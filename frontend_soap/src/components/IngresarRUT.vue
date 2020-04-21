<template>
  <div class="ingresar-rut">
    <div>
      <p>Ingrese RUT sin puntos ni digito verificador</p>
    </div>
    <form @submit.prevent="ingresarRUT">
      <input type="text" v-model="numero" name="numero" placeholder="Ingrese RUT..." />
      <input type="submit" value="Ingresar" class="btn" />
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: "IngresarRUT",
  data() {
    return {
      numero: ""
    };
  },
  methods: {
    ingresarRUT() {
      if (this.numero === "") return;
      if (isNaN(this.numero)) return;
      const nuevoRUT = {
        numero: this.numero,
        digito: undefined
      };
      this.$emit("ingresar-rut", nuevoRUT);
      this.title = "";
    }
  }
};
</script>

<style scoped>
.ingresar-rut {
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


