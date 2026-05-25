import React, { useState } from "react";

export const Ejercicio5 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const operar = (tipo) => {
    if (num1 === "" && num2 === "") {
      setResultado("Introduce números");
    }

    const a = Number(num1);
    const b = Number(num2);

    if (tipo === "sum") setResultado(a + b);
    if (tipo === "subs") setResultado(a - b);
    if (tipo === "power") setResultado(a * b);
    if (tipo === "divide") {
      if (b === 0) {
        setResultado("No se puede dividir por 0");
      } else {
        setResultado(a / b);
      }
    }
  };
  return (
    <>
      <header>
        <h1>Ejercicio 5: Calculadora Sencilla</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar la manipulación de
          formularios, eventos y lógica básica de JavaScript
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea una página con dos campos de entrada
          de números y cuatro botones: "Sumar", "Restar", "Multiplicar",
          "Dividir"
        </p>
        <ul>
          <li>
            Al hacer clic en cualquiera de los botones, debe mostrarse el
            resultado de la operación en un àrea de texto o debajo de los
            botones.
          </li>
          <li>
            Asegúrate de validar los datos para evitar errores (como división
            por cero o entradas vacías)
          </li>
        </ul>
        <a href="./">Volver atrás</a>
        <hr></hr>
      </header>
      <main>
        <div className="inputs">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />

          <input type="text" disabled value={resultado} />
        </div>

        <div className="buttons">
          <button onClick={() => operar("sum")}>Sumar</button>
          <button onClick={() => operar("subs")}>Restar</button>
          <button onClick={() => operar("power")}>Multiplicar</button>
          <button onClick={() => operar("divide")}>Dividir</button>
        </div>
      </main>
    </>
  );
};
