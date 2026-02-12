import { useState } from "react";

export const Ejercicio3 = () => {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (texto === "") return;

    setLista([...lista, texto]);
    setTexto("");
  };

  const handleDelete = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <>
      <header>
        <h1>Ejercicio 3: Lista Dinámica</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong>Trabajar con la creación,
          eliminación y manipulación de elementos del DOM{" "}
        </p>
        <p>
          <strong>Ejercicio:</strong>Crea una página con un campo de texto, un
          botón que diga "Agregar" y una lista vacía debajo
        </p>
        <ul>
          <li>
            Cuando el usuario escriba un texto y haga clic en "Agregar", el
            texto debe añadirse como un nuevo elemento de la lista
          </li>
          <li>
            Añade un botón al lado de cada elemento para eliminarlo de la lista
          </li>
        </ul>
        <a href="../index.html">Volver atrás</a>
        <hr></hr>
      </header>
      <main>
        <form action="#">
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button onClick={handleAdd}>Agregar</button>
        </form>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>❌</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
