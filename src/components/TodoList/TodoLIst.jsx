import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

import { useState, useEffect } from "react";

export const TodoList = ({ tareas, setTareas }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Recuperar tareas desde localStorage cuando el componente se monta
    const savedTareas = localStorage.getItem("tareas");
    if (savedTareas) {
      setTareas(JSON.parse(savedTareas));
    }
  }, [setTareas]);

  useEffect(() => {
    // Almacenar tareas en localStorage cuando cambian
    localStorage.setItem("tareas", JSON.stringify(tareas));
    // console.log(tareas);
  }, [tareas]);

  const onDelete = (id) => {
    const updatedTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(updatedTareas);
  };

  const handleDeleteAll = () => {
    if (tareas.length >= 2) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmDeleteAll = () => {
    setTareas([]);
    setShowConfirmation(false);
  };

  const handleCancelDeleteAll = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="todo-list">
      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <>
          {tareas.map((tarea) => (
            <TodoItem
              key={tarea.id}
              tarea={tarea.text}
              onDelete={() => onDelete(tarea.id)}
              id={tarea.id}
            />
          ))}
          {showConfirmation ? (
            <div className="div-btn-todo-list">
              <p className="p-todo-list text-danger">
                ¿Estás seguro de que quieres eliminar todas las tareas?
              </p>
              <button
                className="btn btn-warning btn-todo-list"
                onClick={handleConfirmDeleteAll}
              >
                Sí, eliminar
              </button>
              <button
                className="btn btn-danger btn-todo-list"
                onClick={handleCancelDeleteAll}
              >
                Cancelar
              </button>
            </div>
          ) : (
            tareas.length >= 2 && (
              <button
                onClick={handleDeleteAll}
                className="btn btn-dark btn-todo-list__delete-all"
              >
                Eliminar todas las tareas
              </button>
            )
          )}
        </>
      )}
    </div>
  );
};
