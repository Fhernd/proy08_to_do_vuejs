<template>
  <div class="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-2 ml-2 mr-2">
    <div class="flex items-center space-x-4">
      <input type="checkbox" :checked="tarea.completada" @change="toggleTarea"
        class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
      <span :class="[
        tarea.completada
          ? 'line-through text-gray-400'
          : 'text-blue-600',
        'text-lg font-medium'
      ]">
        {{ tarea.texto }}
      </span>
    </div>

    <button @click="eliminarTarea"
      class="px-3 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out">
      Eliminar
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['tarea-eliminar', 'tarea-toggle']);

const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const toggleTarea = () => {
  emit('tarea-toggle', props.tarea.id);
};

const eliminarTarea = () => {
  emit('tarea-eliminar', props.tarea.id);
};
</script>

<style scoped></style>
