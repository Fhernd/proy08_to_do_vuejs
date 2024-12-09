<template>
    <div>
        <input type="text" v-model="contenidoTarea" @keyup.enter="agregarTarea"
            placeholder="Ingresa una tarea y presiona Enter" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            contenidoTarea: '',
            tareas: []
        };
    },
    methods: {
        agregarTarea() {
            if (this.contenidoTarea.trim() !== '') {
                this.tareas.push({ name: this.contenidoTarea, status: 'pending' });
                this.contenidoTarea = '';
            }
        }
    }
};
</script>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
}
</style>
