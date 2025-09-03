import { useState } from 'react';

function TodoForm({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if (texto.trim() === '') return;

    onAgregar(texto);
    setTexto('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;