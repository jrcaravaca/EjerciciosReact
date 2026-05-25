import { useState } from "react"

export const Ejercicio2 = () => {
    const [counter, setCounter] = useState(0)

    const handelClick = (e) => {
        e.preventDefault()
        setCounter(counter + 1)
    }

  return (
    <>
    <header>
        <h1>Ejercicio 2: Contador Clics</h1>
        <p><strong>Objetivo del ejercicio:</strong> Prácticar el manejo de eventos y la actualización de contenido del DOM</p>
        <p><strong>Ejercicio:</strong>Crea una página con un botón que diga "Contar clicks" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón el texto debe actualizarse para mostrar el número total de clics realizados</p>
        <a href="./">Volver atrás</a>
    <hr></hr>
    </header>
    <main>
        <button onClick={handelClick}>Contar clics</button>
        <p id="counter">Clicks: {counter} </p>
    </main>
    </>
  )
}
