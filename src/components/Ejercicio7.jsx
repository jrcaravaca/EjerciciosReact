import React, { useState } from "react";

export const Ejercicio7 = () => {
    const [password, setPassword] = useState("")
    const [length, setLenght] = useState("")

    const lower = "abcdefjhijlkmnoprqstuvwkyz"; 
    const upper = "ABCDEFJHIJKLMNOPQRSTUVWKYZ"; 
    const special = "$%&€@#+Ç";
    const numbers = "1234567890"; 

    const handleClick = () => {
        let char = ""; 
        let newPassword = ""

        if  (Number(length) < 4) return setPassword("La longitud debe ser mayor a 4")

        for (let i = 0; i < Number(length); i++) {
            const random = Math.ceil(Math.random() * 12)
            
            if (random === 1 || random === 5 || random === 9) {
                char = lower[Math.ceil(Math.random() * (lower.length - 1))]; 
            } else if (random === 2 || random === 6 ||random === 10) {
                char = upper[Math.ceil(Math.random() * (upper.length - 1))]; 
            } else if (random === 3 || random === 7 ||random === 11) {
                char = special[Math.ceil(Math.random() * (special.length - 1))]; 
            } else if (random === 4 || random === 6 ||random === 12) {
                char = numbers[Math.ceil(Math.random() * (numbers.length - 1))]; 
            }
            newPassword = newPassword + char
        }

        setPassword(newPassword)

        
    }

  return (
    <>
      <header>
        <h1>Ejercicio 7: Generador de Contraseñas Aleatorias</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar la generación de
          cadenas aleatorias y el uso de formulacios{" "}
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea una página con un campo de entrada
          para especificar la longitud de la contraseña y un botón que diga
          "Generar Contraseña"
        </p>
        <ul>
          <li>
            Al hacer click en el botón, se debe mostrar una contraseña generada
            aleatoriamente, usando letras, números y caracteres especiales
          </li>
          <li>
            Si la longitud es menor a 4, o el campo está vacío, muestra un
            mensaje de error indicando que la longitud debe ser mayor o igual
            que 4
          </li>
        </ul>
        <a href="./">Volver atrás</a>
        <hr />
      </header>
      <main>
        <input type="number" id="password-length" onChange={(e) => setLenght(e.target.value)}/>
        <button onClick={handleClick}>Generar Contraseña</button>
        <p id="password">{password}</p>
      </main>
    </>
  );
};
