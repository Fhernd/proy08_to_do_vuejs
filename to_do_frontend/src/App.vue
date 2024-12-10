<script setup>
import ListadoTareas from './components/ListadoTareas.vue';
import FormularioAgregacion from './components/FormularioAgregacion.vue';
import CategoriasTareas from './components/CategoriasTareas.vue';

import tareas from './data/tareas';

</script>

<template>
  <div>
    <!-- <img class="logo" src="./assets/logo.png" alt="Vue logo" /> -->
    <h1>Lista de tareas</h1>
    <FormularioAgregacion />
    <CategoriasTareas />
    <ListadoTareas :tareas="tareas" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
