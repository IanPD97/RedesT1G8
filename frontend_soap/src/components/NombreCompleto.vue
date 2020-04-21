<template>
  <div class="nombre-css" v-show = "nombreCompleto !== ''">
    <p>Nombre completo: {{nombreCompleto}}</p>
  </div>
</template>

<script>
export default {
  name: "NombreCompleto",
  props: ["nombreCompleto"]
};
</script>

<style scoped>
.nombre-css {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>

