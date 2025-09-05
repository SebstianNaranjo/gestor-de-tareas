function TodoItem({ tarea, onCompletar, onEliminar }) {
  const estilo = {
    textDecoration: tarea.completada ? "line-through" : "none",
  };

  return (
    <li className={`tarea ${tarea.completada ? "completada" : ""}`}>
      <label className="checkbox-completar">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onCompletar(tarea.id)}
        />
        Completar
      </label>
      <span className="texto-tarea">{tarea.texto}</span>

      <button className="btn-eliminar" onClick={() => onEliminar(tarea.id)}>
        <i className="fa-solid fa-trash"></i> Eliminar
      </button>
    </li>
  );
}

export default TodoItem;
