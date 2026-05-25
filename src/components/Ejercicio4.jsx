import { useState } from "react";

export const Ejercicio4 = () => {
    const [busqueda, setBusqueda] = useState("")

    const animales = [
    "Gato",
    "Gallina",
    "Caiman",
    "Elefante",
    "Ganso",
    "Tigre",
    "Jirafa",
    "Raton",
    "Cuervo",
    "Hipopotamo",
    "Gorila",
    "Ballena",
    "Gilguero",
    "Guepardo",
    "Antilope",
  ];

  const animalesFiltrados = animales.filter((animal) => 
    animal.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <header>
        <h1>Ejercicio 4: Filtro de Búsqueda en Tiempo Real</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar la interacción
          entre eventos del DOM y lógica en JavaScript{" "}
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea una página con un campo de texto y
          una lista predefinida de elementos
        </p>
        <ul>
          <li>
            Mientras el usuario escribe en el campo, la lista debe actualizarse
            en tiempo real para mostrar solo los elementos que contienen el
            texto escrito
          </li>
        </ul>
        <p>
          <strong>Nota:</strong> En este caso he añadido varios animales que
          empiezan por GA (Gato, Gallina, Ganso) para poder hacer la prueba de
          que se van elimnando los elementos de la lista progresivamente según
          van dejando de aparecer elementos de la lista (pero realmente se puede
          hacer la prueba con cualquiera)
        </p>
        <a href="./">Volver atrás</a>
        <hr></hr>
      </header>
      <main>
        <input 
            type="text" 
            placeholder="Buscar animal..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} />
        <ul id="list">
          {
            animalesFiltrados.map((animal, index) => (
                <li key={index}>{animal}</li>
            ))
          }
        </ul>
      </main>
    </>
  );
};
