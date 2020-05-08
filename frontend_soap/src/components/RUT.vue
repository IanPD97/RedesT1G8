<template>
  <div class="rut-css" v-show = "rut.numero">
    <p>Numero de RUT: {{rut.numero}}</p>
    <p v-if="rut.valido">Su RUT es valido</p>
    <p v-else>Su RUT NO es valido</p>
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

