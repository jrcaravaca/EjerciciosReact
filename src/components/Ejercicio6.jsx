import React, { useEffect, useState } from "react";

export const Ejercicio6 = () => {
  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false); 

useEffect(() => {
  let interval;

  if (running) {
    interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  return () => clearInterval(interval); // limpia siempre
}, [running]);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  const handleStart = () => setRunning(true); 
  const handlePause = () => setRunning(false); 
  const handleRestart = () => {
    setRunning(false)
    setTime(0)
  }

  return (
    <>
      <header>
        <h1>Ejercicio 6: Temporizador con Inicio, Pausa y Reinicio</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar manejo de eventos,
          funciones de temporización y manipulación del DOM
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea un página con un temporizador que
          comience en 00:00:00. Incluye tres botones: "Iniciar", "Pausa",
          "Reiniciar".
        </p>
        <ul>
          <li>
            Al hacer clic en "Iniciar", el temporizador debe comenzar a contar
            los segundos, minutos y horas.
          </li>
          <li>"Pausar" detiende el conteo pero mantiene el tiempo actual</li>
          <li>"Reiniciar" pone el temporizador a 0</li>
        </ul>
        <a href="./">Volver atrás</a>
        <hr></hr>
      </header>
      <main>
        <p>{formatTime(time)}</p>
        <div>
          <button onClick={handleStart}>Inicio</button>
          <button onClick={handlePause}>Pausa</button>
          <button onClick={handleRestart}>Reiniciar</button>
        </div>
      </main>
    </>
  );
};
