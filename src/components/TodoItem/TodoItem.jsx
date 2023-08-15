import "./TodoItem.css";

import { useState } from "react";

const TodoItem = ({ tarea, id, onDelete }) => {
  const [text, setText] = useState(tarea);
  const [isEditing, setIsEditing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    alert("¿Estás seguro de que quieres eliminar esta tarea?");
    onDelete(tarea);
  };
  return (
    <div
      className={isComplete ? "todo-item todo-item-completed" : "todo-item"}
      id={id}
    >
      <div className="todo-item__checkbox">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="todo-item__text">
        {isEditing ? (
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              onBlur={handleSave}
            />
          </form>
        ) : (
          <p
            className={
              isComplete ? "p-todo-item p-todo-item__completed" : "p-todo-item"
            }
          >
            {text}
          </p>
        )}
      </div>
      <div className="todo-item__actions">
        {isEditing ? (
          <button
            className="btn btn-success btn-todo-item"
            onClick={handleSave}
          >
            Guardar
          </button>
        ) : (
          <button
            className={
              isComplete
                ? "disabled btn btn-success btn-todo-item"
                : "btn btn-success btn-todo-item"
            }
            onClick={handleEdit}
          >
            <i className="fi fi-rr-pencil"></i>
          </button>
        )}
        <button
          className={
            isComplete
              ? "disabled btn btn-danger btn-todo-item"
              : "btn btn-danger btn-todo-item"
          }
          onClick={handleDelete}
        >
          <i className="fi fi-rr-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
