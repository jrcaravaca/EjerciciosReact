import React, { useState } from "react";

export const Ejercicio8 = () => {
    let [charCount, setcharCount] = useState(""); 
    let [wordCount, setwordCount] = useState(""); 
    
    const handleChange = (e) => {
        let value = e.target.value; 

        let words = value.trim().split(/\s+/).filter(Boolean)
        let chars = value.replace(/[\s\n\r]/g, '')

        setwordCount(words.length); 
        setcharCount(chars.length)
    }

  return (
    <>
      <header>
        <h1>Ejercicio 8: Contador de palabras y caracteres</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar eventos en tiempo
          real y manipulación avanzada del DOM
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea una página con un campo de texto
          donde el usuario pueda escribir un párrafo
        </p>
        <ul>
          <li>
            Muestra en tiempo real el número de caracteres y palabras ingresados
            debajo del campo
          </li>
          <li>
            Palabras deben ser separadas por espacios, y los caracteres no deben
            incluir carácteres ni saltos de linea
          </li>
        </ul>
        <a href="./">Volver atrás</a>
        <hr />
      </header>
      <main>
        <textarea name="texto" onChange={handleChange}></textarea>
        <p>
          Palabras: <span>{wordCount}</span>
        </p>
        <p>
          Caracteres: <span>{charCount}</span>
        </p>
      </main>
    </>
  );
};
