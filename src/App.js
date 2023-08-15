import "./App.css";

import { useState } from "react";

//importar componentes
import InputForm from "./components/InputForm/InputForm";
import { TodoList } from "./components/TodoList/TodoLIst";

function App() {
  const [value, setValue] = useState("");
  const [tareas, setTareas] = useState(
    window.localStorage.getItem("tareas")
      ? JSON.parse(localStorage.getItem("tareas"))
      : []
  );
  const [id, setId] = useState(0);

  const setLocalStorage = (tareas) => {
    try {
      setTareas(tareas);
      window.localStorage.setItem("tareas", JSON.stringify(tareas));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTarea = {
      id: id,
      text: value,
    };
    setLocalStorage([...tareas, newTarea]);
    setId(id + 1);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
      <InputForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        tareas={tareas}
      />
      <TodoList
        tareas={tareas}
        id={id}
        setTareas={setTareas}
        setLocalStorage={setLocalStorage}
      />
    </div>
  );
}

export default App;
