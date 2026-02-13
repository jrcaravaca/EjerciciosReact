
import { useState } from 'react'
import './App.css'
import { Ejercicio1 } from './components/Ejercicio1'
import { Ejercicio2 } from './components/Ejercicio2'
import { Ejercicio3 } from './components/Ejercicio3'
import { Ejercicio4 } from './components/Ejercicio4'
import { Ejercicio5 } from './components/Ejercicio5'
import { Ejercicio6 } from './components/Ejercicio6'
import { Ejercicio7 } from './components/Ejercicio7'
import { Ejercicio8 } from './components/Ejercicio8'
import { Ejercicio9 } from './components/Ejercicio9'

function App() {
  const [ejercicio, setEjercicio] = useState("list")

  if (ejercicio === 1) return <Ejercicio1/>
  if (ejercicio === 2) return <Ejercicio2/>
  if (ejercicio === 3) return <Ejercicio3/>
  if (ejercicio === 4) return <Ejercicio4/>
  if (ejercicio === 5) return <Ejercicio5/>
  if (ejercicio === 6) return <Ejercicio6/>
  if (ejercicio === 7) return <Ejercicio7/>
  if (ejercicio === 8) return <Ejercicio8/>
  if (ejercicio === 9) return <Ejercicio9/>



  return (
    <>
      <h1>Ejercicios React</h1>
      <ul>
        <li onClick={() => setEjercicio(1)}>Ejercicio 1</li>
        <li onClick={() => setEjercicio(2)}>Ejercicio 2</li>
        <li onClick={() => setEjercicio(3)}>Ejercicio 3</li>
        <li onClick={() => setEjercicio(4)}>Ejercicio 4</li>
        <li onClick={() => setEjercicio(5)}>Ejercicio 5</li>
        <li onClick={() => setEjercicio(6)}>Ejercicio 6</li>
        <li onClick={() => setEjercicio(7)}>Ejercicio 7</li>
        <li onClick={() => setEjercicio(8)}>Ejercicio 8</li>
        <li onClick={() => setEjercicio(9)}>Ejercicio 9</li>


      </ul>
    </>
  )
}

export default App
