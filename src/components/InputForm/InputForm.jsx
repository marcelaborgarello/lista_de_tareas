//importo useState

//importo boostrap
import "bootstrap/dist/css/bootstrap.min.css";

//importo css
import "./InputForm.css";
import { useRef } from "react";

//creo el componente

const InputForm = (props) => {
  const form = useRef(null);

  const limpiarForm = () => {
    form.current.value = "";
  };

  return (
    <div className="mb-3 div-form">
      <h1>Lista de tareas</h1>
      <form onSubmit={props.handleSubmit} className="form-control form">
        <input
          ref={form}
          type="text"
          className="form-control input"
          value={props.value}
          onChange={props.handleChange}
        />
        <button
          type="submit"
          className="btn-form"
          onClick={(props.handleSubmit, limpiarForm)}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default InputForm;
