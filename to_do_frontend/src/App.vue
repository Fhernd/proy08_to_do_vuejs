<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="w-full md:w-2/3 lg:w-1/2 text-center fixed top-0 bg-white z-10 shadow-md">
      <h1
        class="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md">
        LISTA DE TAREAS
      </h1>
      <FormularioAgregacion @tarea-agregada="manejarTareaAgregada" />
      <CategoriasTareas @tareas-filtrar="filtrarTareas" :filtroActivo="categoriaActiva" :cantidadTareas="tareas.length" :cantidadTareasPendientes="tareas.filter(e => !e.completada).length" :cantidadTareasCompletadas="tareas.filter(e => e.completada).length" />
    </div>

    <div class="w-full md:w-2/3 lg:w-1/2 mt-52">
      <ListadoTareas :tareas="tareasFiltradas" @tarea-eliminar="eliminarTareaManejador"
        @tarea-actualizada="actualizarEstadoTarea" :categoriaActiva="categoriaActiva"
        @eliminar-tareas-completadas="eliminarTareasCompletadas" @tarea-editar="tareaEditar" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useToast } from "vue-toastification";

import ListadoTareas from './components/ListadoTareas.vue';
import FormularioAgregacion from './components/FormularioAgregacion.vue';
import CategoriasTareas from './components/CategoriasTareas.vue';
import { crearTarea, editarTarea, eliminarTarea, eliminarTareasFinalizadas, finalizarTarea, obtenerTareas } from './services/api';

const tareas = ref([]);
const tareasFiltradas = ref([]);

const toast = useToast();

onMounted(async () => {
  try {
    const tareasObtenidas = await obtenerTareas();
    tareasFiltradas.value = tareasObtenidas;
    tareas.value = tareasObtenidas;
  } catch (error) {
    toast.warning('No se pudieron obtener las tareas', {
      timeout: 2000,
    });
  }
});

const categoriaActiva = ref('todas');

const manejarTareaAgregada = (tarea) => {
  crearTarea(tarea)
    .then((tareaCreada) => {
      tareas.value = [...tareas.value, tareaCreada.tarea];
      aplicarFiltro();

      toast.success('Tarea agregada satisfactoriamente', {
        timeout: 1500,
      });
    })
    .catch((error) => {
      toast.warning('No se pudo agregar la tarea', {
        timeout: 1500,
      });
    });
};

const eliminarTareaManejador = (id) => {
  eliminarTarea(id)
    .then(() => {
      tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
      aplicarFiltro();

      toast.success('Tarea eliminada satisfactoriamente', {
        timeout: 1500,
      });
    })
    .catch((error) => {
      toast.warning('No se pudo eliminar la tarea', {
        timeout: 1500,
      });
    });
};

const filtrarTareas = (filtro) => {
  categoriaActiva.value = filtro;
  aplicarFiltro();
};

const actualizarEstadoTarea = (id) => {
  const tareaActualizada = tareas.value.find((tarea) => tarea.id === id);
  finalizarTarea(id, !tareaActualizada.completada)
    .then(() => {
      tareas.value = tareas.value.map((tarea) => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      aplicarFiltro();

      toast.success('Estado de la tarea actualizado satisfactoriamente', {
        timeout: 1500,
      });
    })
    .catch((error) => {
      toast.warning('No se pudo actualizar el estado de la tarea', {
        timeout: 1500,
      });
    });
};

const aplicarFiltro = () => {
  switch (categoriaActiva.value) {
    case 'todas':
      tareasFiltradas.value = tareas.value;
      break;
    case 'pendientes':
      tareasFiltradas.value = tareas.value.filter((tarea) => !tarea.completada);
      break;
    case 'completadas':
      tareasFiltradas.value = tareas.value.filter((tarea) => tarea.completada);
      break;
    default:
      tareasFiltradas.value = tareas.value;
  }
};

const eliminarTareasCompletadas = () => {
  const tareasCompletadasIds = tareas.value
    .filter((tarea) => tarea.completada)
    .map((tarea) => tarea.id);
  eliminarTareasFinalizadas(tareasCompletadasIds)
    .then(() => {
      const tareasPendientes = tareas.value.filter((tarea) => !tarea.completada);
      tareas.value = tareasPendientes;
      aplicarFiltro();

      toast.success('Tareas completadas eliminadas satisfactoriamente', {
        timeout: 1500,
      });
    })
    .catch((error) => {
      toast.warning('No se pudieron eliminar las tareas completadas', {
        timeout: 1500,
      });
    });
};

const tareaEditar = (tarea) => {
  editarTarea(tarea)
    .then(() => {
      const tareaEditada = tareas.value.find((t) => t.id === tarea.id);
      tareaEditada.texto = tarea.texto;
      aplicarFiltro();

      toast.success('Tarea editada satisfactoriamente', {
        timeout: 1500,
      });
    })
    .catch((error) => {
      toast.warning('No se pudo editar la tarea', {
        timeout: 1500,
      });
    });
};
</script>
