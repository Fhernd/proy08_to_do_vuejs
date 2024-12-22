class Todo:
    """
    Clase que representa una tarea.
    """
    def __init__(self, ID, Titulo, FechaTarea, TareaTerminada, FechaModificacion):
        """
        Inicializa una nueva tarea.
        
        - ID: int -- Identificador de la tarea
        - Titulo: str -- Descripción de la tarea
        - FechaTarea: str -- Fecha de la tarea
        - TareaTerminada: int -- Indica si la tarea está terminada
        - FechaModificacion: str -- Fecha de la última modificación
        """
        self.id = ID
        self.texto = Titulo
        self.fechaHora = FechaTarea
        self.completada = TareaTerminada
        self.fechaModificacion = FechaModificacion
