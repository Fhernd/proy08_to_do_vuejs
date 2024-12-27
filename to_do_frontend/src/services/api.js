import axios from "axios";

// Configuración del cliente HTTP con la URL base
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // URL del servidor Flask desde las variables de entorno
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Obtener todas las tareas
 * @returns {Promise} Lista de tareas
 */
export const obtenerTareas = async () => {
    try {
        const response = await apiClient.get("/tareas");
        return response.data.tareas;
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        throw error;
    }
};

/**
 * Crear una nueva tarea
 * @param {Object} tarea Datos de la tarea
 * @returns {Promise} Mensaje de éxito o error
 */
export const crearTarea = async (tarea) => {
    try {
        const response = await apiClient.post("/tareas", tarea);
        return response.data;
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        throw error;
    }
};

/**
 * Finalizar una tarea
 * @param {string} id ID de la tarea
 * @returns {Promise} Mensaje de éxito o error
 */
export const finalizarTarea = async (id) => {
    try {
        const response = await apiClient.put(`/tareas/finalizar/${id}`);
        return response.data.mensaje;
    } catch (error) {
        console.error("Error al finalizar la tarea:", error);
        throw error;
    }
};

/**
 * Eliminar una tarea por ID
 * @param {string} id ID de la tarea
 * @returns {Promise} Mensaje de éxito o error
 */
export const eliminarTarea = async (id) => {
    try {
        const response = await apiClient.delete(`/tareas/${id}`);
        return response.data.mensaje;
    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        throw error;
    }
};

/**
 * Eliminar múltiples tareas finalizadas
 * @param {Array<string>} tareasIds Lista de IDs de tareas a eliminar
 * @returns {Promise} Mensaje de éxito o error
 */
export const eliminarTareasFinalizadas = async (tareasIds) => {
    try {
        const response = await apiClient.delete("/tareas/eliminar-finalizadas", {
            data: { tareasIds },
        });
        return response.data.mensaje;
    } catch (error) {
        console.error("Error al eliminar tareas finalizadas:", error);
        throw error;
    }
};

/**
 * Edita el texto de una tarea.
 * @param {Object} tarea Datos de la tarea
 * @returns {Promise} Mensaje de éxito o error
 */
export const editarTarea = async (tarea) => {
    try {
        const response = await apiClient.put(`/tareas/${tarea.id}`, tarea);
        return response.data.mensaje;
    } catch (error) {
        console.error("Error al editar la tarea:", error);
        throw error;
    }
}

export default {
    obtenerTareas,
    crearTarea,
    finalizarTarea,
    eliminarTarea,
    eliminarTareasFinalizadas,
    editarTarea,
};
