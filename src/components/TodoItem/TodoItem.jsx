import "./TodoItem.css";

import { useState, useEffect } from "react";

const TodoItem = ({ tarea, id, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const initialIsComplete = JSON.parse(localStorage.getItem(`isComplete_${id}`)) || false;
  const [isComplete, setIsComplete] = useState(initialIsComplete);
  
  const initialText = JSON.parse(localStorage.getItem(`text_${id}`)) || tarea;
  const [editedText, setEditedText] = useState(initialText);

  useEffect(() => {
    localStorage.setItem(`isComplete_${id}`, JSON.stringify(isComplete));
  }, [isComplete, id]);

  useEffect(() => {
    localStorage.setItem(`text_${id}`, JSON.stringify(editedText));
  }, [editedText, id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setEditedText(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
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
              value={editedText}
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
            {editedText}
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
