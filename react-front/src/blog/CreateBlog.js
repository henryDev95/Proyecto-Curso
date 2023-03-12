import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const urlBase = "http://localhost:8000/blogs";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const navigation = useNavigate();

  const saveBlog = async (event) => {
    event.preventDefault();
    await axios.post(urlBase, {
      title: title,
      context: context
    });
    navigation("/");
  };

  return (
    <div className="container">
      <h2>Crear nuevo blog</h2>
      <form onSubmit={saveBlog} className="row g-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Ingrese el title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contexto</label>
          <input
            value={context}
            onChange={(e) => {
              setContext(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Ingrese el contexto"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
