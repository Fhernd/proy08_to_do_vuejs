from flask import Flask, request
from flask_cors import CORS

from db.crud_todo import buscar_tarea_por_id, crear_tarea, eliminar_tarea, finalizar_tarea, obtener_tareas

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = '@#@$MYSUPERSECRETKEY@#@$'

@app.route('/')
def index():
    """
    Página de inicio de la API.
    """
    return {
        'mensaje': 'Bienvenido a la API de tareas'
    }


@app.route('/tareas', methods=['GET'])
def todas():
    """
    Obtiene todas las tareas.

    Returns: dict -- Lista de tareas
    """
    tareas = obtener_tareas()
    return {'tareas': [tarea.__dict__ for tarea in tareas]}


@app.route('/tareas', methods=['POST'])
def guardar():
    """
    Almacena una nueva tarea.

    Returns: dict -- Mensaje de confirmación
    """
    todo = request.json
    
    resultado = crear_tarea(todo)
    
    if resultado:
        return {'tarea': resultado, 'mensaje': 'Tarea almacenada correctamente'}
    else:
        return {'mensaje': 'Error al almacenar la tarea'}


@app.route('/tareas/finalizar/<id>', methods=['PUT'])
def modificar(id):
    """
    Modifica una tarea dado su ID.

    Arguments:
    - id: int -- ID de la tarea a modificar

    Returns: dict -- Mensaje de confirmación
    """
    tarea = buscar_tarea_por_id(id)

    if tarea:
        resultado = finalizar_tarea(id, not tarea.completada)
        
        if resultado:
            return {'mensaje': 'Tarea finalizada correctamente'}
        else:
            return {'mensaje': 'Error al finalizar la tarea'}
    else:
        return {'mensaje': 'Tarea no encontrada'}


@app.route('/tareas/<id>', methods=['DELETE'])
def eliminar(id):
    """
    Elimina una tarea dado su ID.

    Arguments:
    - id: int -- ID de la tarea a eliminar

    Returns: dict -- Mensaje de confirmación
    """
    resultado = eliminar_tarea(id)
    
    if resultado:
        return {'mensaje': 'Tarea eliminada correctamente'}
    else:
        return {'mensaje': 'Error al eliminar la tarea'}


@app.route('/tareas/eliminar-finalizadas', methods=['DELETE'])
def eliminar_finalizadas():
    """
    Elimina las tareas finalizadas.

    Returns: dict -- Mensaje de confirmación
    """
    tareas_ids = request.json
    tareas_ids = tareas_ids['tareasIds']
    
    for id in tareas_ids:
        resultado = eliminar_tarea(id)
    
    if resultado:
        return {'mensaje': 'Tareas eliminadas correctamente'}
    else:
        return {'mensaje': 'Error al eliminar las tareas'}


@app.route('/tareas/<id>', methods=['PUT'])
def editar(id):
    """
    Edita una tarea dado su ID.

    Arguments:
    - id: int -- ID de la tarea a editar

    Returns: dict -- Mensaje de confirmación
    """
    todo = request.json
    
    resultado = editar_tarea(id, todo)
    
    if resultado:
        return {'mensaje': 'Tarea editada correctamente'}
    else:
        return {'mensaje': 'Error al editar la tarea'}
