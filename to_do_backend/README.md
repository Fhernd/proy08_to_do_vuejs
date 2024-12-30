# 1. PROYECTO 8 - API Web para Tareas por Realizar (ToDo)

Esta es una **API web para gestionar notas y tareas pendientes** desarrollada con **Flask**, un microframework de Python. Permite a los usuarios realizar operaciones CRUD (crear, leer, actualizar y eliminar) a través de una API. Esta API se encarga de gestionar los datos de las tareas.

---

## Descripción del Proyecto

La aplicación está diseñada para:
- Crear tareas pendientes.
- Editar y eliminar tareas existentes.
- Buscar y visualizar tareas guardadas.

---

## Tecnologías Utilizadas

- **Python 3.x**
- **Flask 3.0.0**
- **HTML, CSS, y JavaScript** para el frontend.

---

## Requisitos Previos

Asegúrate de tener instalado **Python 3.x** en tu sistema. Puedes verificarlo ejecutando:

```bash
python --version
```
o
```bash
python3 --version
```

Si no está instalado, descárgalo desde [python.org](https://www.python.org/downloads/).

---

# 2. Proceso de Instalación

### 1. Instalación de Python
#### Windows:
1. Descarga el instalador desde [python.org](https://www.python.org/downloads/).
2. Durante la instalación, marca la casilla **"Add Python to PATH"**.
3. Finaliza la instalación.

#### macOS:
1. Abre una terminal y ejecuta:
   ```bash
   brew install python
   ```
   (Asegúrate de tener Homebrew instalado).

#### Linux (Debian/Ubuntu):
1. Abre una terminal y ejecuta:
   ```bash
   sudo apt update
   sudo apt install python3 python3-pip
   ```

### 2. Clona este repositorio

```bash
git clone https://github.com/usuario/proyecto6-todo.git
cd proyecto6-todo
```

### 3. Crear un Ambiente Virtual
#### Windows:
```bash
python -m venv venv
```

#### macOS/Linux:
```bash
python3 -m venv venv
```

### 4. Activar el Ambiente Virtual
#### Windows:
```bash
venv\Scripts\activate
```

#### macOS/Linux:
```bash
source venv/bin/activate
```

### 5. Instalar las Dependencias
Ejecuta el siguiente comando para instalar las dependencias listadas en `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

# 3. Ejecución de la Aplicación

1. Asegúrate de que el ambiente virtual esté activado.
2. Ejecuta el archivo principal de la aplicación:

```bash
flask run
```

3. Abre tu navegador web y accede a [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

# 4. Rutas de la API

Esta API permite realizar operaciones básicas para la gestión de tareas a realizar:
- crear
- listar
- actualizar
- eliminar

---

## **Rutas de la API**

### **1. Inicio**
- **URL:** `/`
- **Método:** `GET`
- **Descripción:** Retorna un mensaje de bienvenida a la API.
- **Respuesta:**
  ```json
  {
    "mensaje": "Bienvenido a la API de tareas"
  }
  ```

---

### **2. Crear una tarea**
- **URL:** `/guardar`
- **Método:** `POST`
- **Descripción:** Guarda una nueva tarea en la base de datos.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "titulo": "Nombre de la tarea",
    "descripcion": "Descripción de la tarea"
  }
  ```
- **Respuesta:**
  - **Éxito:**
    ```json
    {
      "mensaje": "Tarea almacenada correctamente"
    }
    ```
  - **Error:**
    ```json
    {
      "mensaje": "Error al almacenar la tarea"
    }
    ```

---

### **3. Obtener todas las tareas**
- **URL:** `/tareas`
- **Método:** `GET`
- **Descripción:** Devuelve todas las tareas almacenadas en la base de datos.
- **Respuesta:**
  ```json
  {
    "tareas": [
      {
        "id": 1,
        "titulo": "Nombre de la tarea",
        "descripcion": "Descripción de la tarea",
        "completado": false
      }
    ]
  }
  ```

---

### **4. Eliminar una tarea**
- **URL:** `/tareas/<id>`
- **Método:** `DELETE`
- **Descripción:** Elimina una tarea específica por su ID.
- **Parámetro de la URL:**
  - `id` (entero): ID de la tarea que se desea eliminar.
- **Respuesta:**
  - **Éxito:**
    ```json
    {
      "mensaje": "Tarea eliminada correctamente"
    }
    ```
  - **Error:**
    ```json
    {
      "mensaje": "Error al eliminar la tarea"
    }
    ```

---

### **5. Marcar una tarea como finalizada**
- **URL:** `/tareas/finalizar/<id>`
- **Método:** `PUT`
- **Descripción:** Marca una tarea como finalizada por su ID.
- **Parámetro de la URL:**
  - `id` (entero): ID de la tarea que se desea finalizar.
- **Respuesta:**
  - **Éxito:**
    ```json
    {
      "mensaje": "Tarea finalizada correctamente"
    }
    ```
  - **Error:**
    ```json
    {
      "mensaje": "Error al finalizar la tarea"
    }
    ```

---

### **6. Eliminar todas las tareas finalizadas**
- **URL:** `/tareas/eliminar-todas/finalizadas`
- **Método:** `DELETE`
- **Descripción:** Elimina múltiples tareas finalizadas según los IDs proporcionados.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "tareasIds": [1, 2, 3]
  }
  ```
- **Respuesta:**
  - **Éxito:**
    ```json
    {
      "mensaje": "Tareas eliminadas correctamente"
    }
    ```
  - **Error:**
    ```json
    {
      "mensaje": "Error al eliminar las tareas"
    }
    ```

### **7. Editar una tarea
- **URL:** `/tareas/{id}`
- **Método:** `PUT`
- **Descripción:** Edita una tarea específica proporcionada por su ID.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "titulo": "Nuevo título de la tarea",
    "descripcion": "Nueva descripción de la tarea",
    "completada": false
  }
  ```
- **Respuesta:**
  - **Éxito:**
    ```json
    {
      "mensaje": "Tarea editada correctamente"
    }
    ```
  - **Error:**
    ```json
    {
      "mensaje": "Error al editar la tarea"
    }
    ```
---

# 5. Autor

Creado por John Ortiz Ordoñez - johnortizo@outlook.com
**Repositorio en GitHub:** [Enlace al repositorio](https://github.com/Fhernd/proyecto8_to_do)
