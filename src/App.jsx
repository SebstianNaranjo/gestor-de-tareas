import { useState } from "react";
import "./App.css";
import TodoForm from "./componentes/TodoForm";
import TodoList from "./componentes/TodoList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [contadorId, setContadorId] = useState(1);

  const agregarTarea = (texto) => {
    if (texto.trim() === "") return;

    const nuevaTarea = {
      id: contadorId,
      texto,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setContadorId(contadorId + 1);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TodoForm onAgregar={agregarTarea} />
      <TodoList
        tareas={tareas}
        onCompletar={completarTarea}
        onEliminar={eliminarTarea}
      />
    </div>
  );
}

export default App;
