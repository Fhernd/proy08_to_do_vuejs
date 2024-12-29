<template>
  <div class="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-2 ml-2 mr-2">
    <div class="flex items-center space-x-4">
      <input type="checkbox" :checked="tarea.completada" @change="toggleTarea"
        class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
      <span :class="[tarea.completada ? 'line-through text-gray-400' : 'text-blue-600', 'text-lg font-medium']">
        {{ tarea.texto }}
      </span>
    </div>

    <div class="flex items-center space-x-2">
      <!-- Botón para editar la tarea -->
      <button @click="abrirModal"
        class="px-3 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 ease-in-out">
        <i class="fas fa-edit"></i>
      </button>

      <!-- Botón para eliminar la tarea -->
      <button @click="eliminarTarea"
        class="px-3 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="modalAbierto" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Editar Tarea</h2>
      <input ref="inputField" v-model="textoEditado" type="text" @keyup.enter="guardarCambios"
        class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Ingrese el nuevo texto de la tarea" />

      <div class="flex justify-end space-x-2 mt-4">
        <button @click="cerrarModal"
          class="px-4 py-2 bg-gray-500 text-white text-sm font-semibold rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out">
          Cancelar
        </button>
        <button @click="guardarCambios"
          class="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const emit = defineEmits(['tarea-eliminar', 'tarea-toggle', 'tarea-editar']);

const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const modalAbierto = ref(false);
const textoEditado = ref('');
const inputField = ref(null); // Referencia al campo de texto

const abrirModal = () => {
  textoEditado.value = props.tarea.texto; // Inicializa el texto del modal con el texto actual de la tarea
  modalAbierto.value = true;

  // Asegura que el DOM esté renderizado antes de enfocar el campo de texto
  nextTick(() => {
    inputField.value.focus();
  });
};

const cerrarModal = () => {
  modalAbierto.value = false;
};

const guardarCambios = () => {
  emit('tarea-editar', { id: props.tarea.id, texto: textoEditado.value });
  cerrarModal();
};

const toggleTarea = () => {
  emit('tarea-toggle', props.tarea.id);
};

const eliminarTarea = () => {
  emit('tarea-eliminar', props.tarea.id);
};
</script>

<style scoped></style>
