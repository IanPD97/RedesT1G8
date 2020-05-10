<template>
  <div class="ingresar-rut">
    <div>
      <p>Ingrese RUT con digito verificador</p>
    </div>
    <form @submit.prevent="ingresarRUT">
      <input type="text" v-model="entrada" name="entrada" placeholder="Ingrese RUT..." />
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
      entrada: ""
    };
  },
  methods: {
    ingresarRUT() {
      const rut = this.entrada
      if (rut === "") return;
      const rutSeparado = rut.split("-");
      if (rutSeparado[1] === undefined) return;
      this.$emit("ingresar-rut", this.entrada);
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


