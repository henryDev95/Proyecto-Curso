import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const urlBase = "http://localhost:8000/blogs/";
const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const navigation = useNavigate();
  const {id} = useParams();

  const updateBlog = async (event) => {
    event.preventDefault();
    await axios.put(urlBase + id, {
      title: title,
      context: context,
    });
    navigation("/");
  };

  const getBlogById = async () => {
    const response = await axios.get(urlBase + id);
    setTitle(response.data.title);
    setContext(response.data.context);
  };

  useEffect(() => {
    getBlogById();
  }, []);

  return (
    <div className="container">
      <h2>Editar blog</h2>
      <form onSubmit={updateBlog} className="row g-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Ingrese el contexto"
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

export default EditBlog;
