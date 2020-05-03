<template>
  <div class="rut-css" v-show = "rut.numero">
    <p>Numero de RUT: {{rut.numero}}</p>
    <p>Digito verificador: {{rut.digito}}</p>
  </div>
</template>

<script>
export default {
  name: "RUT",
  props: ["rut"]
};
</script>

<style scoped>
.rut-css {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>

