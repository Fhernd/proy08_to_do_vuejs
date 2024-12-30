# Lista de Tareas - Frontend

Esta es una aplicación de lista de tareas desarrollada con **Vue.js 3**, **Vite**, y **TailwindCSS**. Permite a los usuarios gestionar tareas pendientes con funcionalidades para agregar, editar, eliminar y marcar como completadas.

---

## Descripción del Proyecto

El proyecto está diseñado para:
- Crear tareas pendientes.
- Editar y eliminar tareas existentes.
- Filtrar tareas por estado: Todas, Pendientes y Finalizadas.

---

## Tecnologías Utilizadas

- **Vue.js 3**
- **Vite**
- **TailwindCSS**
- **Font Awesome** para iconos

---

## Requisitos Previos

Asegúrate de tener instalado **Node.js** y **npm** en tu sistema. Puedes verificarlo ejecutando:

```bash
node --version
npm --version
```

Si no está instalado, descárgalo desde [nodejs.org](https://nodejs.org/).

---

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/Fhernd/proy08_to_do_vuejs.git
cd lista-de-tareas-frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador web y accede a [http://localhost:5173](http://localhost:5173).

---

## Funcionalidades

### 1. Agregar una Tarea
- Ingresa el texto de la tarea en el campo superior y presiona **Enter**.
- La tarea será añadida automáticamente a la lista de tareas pendientes.

### 2. Editar una Tarea
- Haz clic en el ícono de edición ![Editar Icono](src/assets/edit-icon.png) para modificar el texto de la tarea.

### 3. Eliminar una Tarea
- Haz clic en el ícono de eliminar ![Eliminar Icono](src/assets/delete-icon.png) para borrar una tarea.

### 4. Filtrar Tareas
- Filtra tareas por estado usando los botones:
  - **Todas las tareas**
  - **Pendientes**
  - **Finalizadas**

### 5. Marcar como Completada
- Haz clic en la casilla de verificación para marcar una tarea como completada.

---

## Vista Previa

### Estructura de archivos y carpetas
![Estructura de archivos y carpetas](docs/vista_01_estructura_archivos_carpetas.png)

### Vista general móvil
![Vista general móvil](docs/vista_02_listado_tareas_movil.png)

### Vista general escritorio
![Vista general escritorio](docs/vista_03_listado_tareas_escritorio.png)

### Edición de una tarea
![Edición de una tarea](docs/vista_04_edicion_tarea.png)

### Tareas pendientes
![Tareas pendientes](docs/vista_05_tareas_pendientes.png)

### Tareas finalizadas
![Tareas finalizadas](docs/vista_06_tareas_finalizadas.png)

---

## Autor

Creado por John Ortiz Ordoñez - johnortizo@outlook.com

**Repositorio en GitHub:** [Enlace al repositorio](https://github.com/Fhernd/proy08_to_do_vuejs)
