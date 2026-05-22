import { useState } from "react"

export const Ejercicio1 = () => {
    const [color, setColor] = useState("")

    function handleClick(e) {
        const red = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)

        setColor(`rgb(${red}, ${green}, ${blue})`)

        e.preventDefault()
        const body = document.querySelector("body")
        body.style.backgroundColor = color;
    }


  return (
    <>
      <header>
        <h1>Ejercicio 1: Cambiador de Color de Fondo</h1>
        <p><strong>Objetivo del ejercicio:</strong> Prácticar eventos en JavaScript y manipulación de estilos del DOM</p>
        <p><strong>Ejercicio:</strong>Crear una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga click en el botón, el color de fondo de la página debe cambiar a un color aleatorio</p>
        <a href="../../index.html">Volver atrás</a>
    <hr></hr>
    </header>
    <main>
        <button onClick={handleClick}>Cambiar color</button>
    </main>
    </>
  )
}
