function TodoItem({ tarea, onCompletar, onEliminar }) {
  const estilo = {
    textDecoration: tarea.completada ? "line-through" : "none",
  };

  return (
    <li style={estilo}>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onCompletar(tarea.id)}
      />
      {tarea.texto}
      <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
