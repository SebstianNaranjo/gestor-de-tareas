import { useState } from "react";
import "./App.css";
import TodoForm from "./componentes/TodoForm";

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

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TodoForm onAgregar={agregarTarea} />
    </div>
  );
}

export default App;