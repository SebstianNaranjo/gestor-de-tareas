import TodoItem from "./TodoItem";

function TodoList({ tareas, onCompletar, onEliminar }) {
  if (tareas.length === 0) {
    return <p>No hay tareas por mostrar.</p>;
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        <TodoItem
          key={tarea.id}
          tarea={tarea}
          onCompletar={onCompletar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default TodoList;
