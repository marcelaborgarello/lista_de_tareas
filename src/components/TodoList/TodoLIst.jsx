import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

import { useState } from "react";

export const TodoList = (props) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onDelete = (id) => {
    const updatedTareas = props.tareas.filter((tarea) => tarea.id !== id);
    props.setTareas(updatedTareas);
  };

  const handleDeleteAll = () => {
    if (props.tareas.length >= 2) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmDeleteAll = () => {
    props.setTareas([]);
    setShowConfirmation(false);
  };

  const handleCancelDeleteAll = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="todo-list">
      {props.tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <>
          {props.tareas.map((tarea) => (
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
            props.tareas.length >= 2 && (
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
