import React, { useEffect, useState } from "react";

export const Ejercicio9 = () => {
const [input, setInput] = useState("");
const [taskList, setTaskList] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});

  const loadTasks = () => {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;
    setTaskList(JSON.parse(saved));
  };

  const handleAddTask = () => {
    if (input === "") return;

    const newTask = {
      text: input,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = taskList.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index); 
    setTaskList(newTasks)
  }


  const deleteCompleted = () => {
    const newTasks = taskList.filter((task) => !task.completed);
    setTaskList(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    loadTasks();
  }, []);

  
  return (
    <>
      <header>
        <h1>Ejercicio 9: Lista de Tareas con LocalStorage</h1>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar persistencia de
          datos con localStorage{" "}
        </p>
        <p>
          <strong>Ejercicio:</strong> Crea una aplicación de lista tareas
        </p>
        <ul>
          <li>
            Cada tarea debe incluir un texto, y un checkbox para marcarla como
            completada
          </li>
          <li>
            Las tareas se deben guardar en localStorage para que persistan
            incluso si la página se recarga
          </li>
          <li>
            Debe incluir un botón para limpiar todas las tareas completadas y
            actualizar localStorage
          </li>
        </ul>
        <a href="../index.html">Volver atrás</a>
        <hr />
      </header>
      <main>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar tarea</button>

        <ul>
          {taskList.map((task, index) => {
            return (
              <li key={index} style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "white"
              }}>
                {task.text} <input type="checkbox" checked={task.completed} onChange={() => {toggleTask(index)}} />{" "}
                <button onClick={() => {handleDelete(index)}}>Borrar</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => {setTaskList([])}}>Eliminar todas</button>
        <button onClick={deleteCompleted}>Eliminar completadas</button>
      </main>
    </>
  );
};
