import "./App.css";
//importar bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//importar useState
import { useState } from "react";

//importar componentes
import InputForm from "./components/InputForm/InputForm";
import { TodoList } from "./components/TodoList/TodoLIst";

function App() {
  const [value, setValue] = useState("");
  const [tareas, setTareas] = useState([]);
  const [id, setId] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTarea = {
      id: id,
      text: value,
    };
    setTareas([...tareas, newTarea]);
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
      <TodoList tareas={tareas} id={id} setTareas={setTareas} />
    </div>
  );
}

export default App;
