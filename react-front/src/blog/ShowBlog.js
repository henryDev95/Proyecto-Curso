import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ShowBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  const getAllBlog = async () => {
    const urlBase = "http://localhost:8000/blogs";
    const response = await fetch(urlBase);
    const data = await response.json();
    setBlogs(data);
  };

  const SearchFilter = (event) => {
    setSearch(event.target.value);
   
  };

  let result = []
  if(search == ""){
    result = blogs
  }else{
    result  = blogs.filter((blog)=> blog.title.includes(search))
  }

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="container">
      <h2>Listado de Blogs</h2>
      <br />
      <div className="row">
        <div className="col">
        <Link to="/create" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Nuevo</Link>
          <div className="mb-3">
            <input
              value={search}
              type="text"
              className="form-control"
              placeholder="Search.."
              onChange={SearchFilter}
            />
          </div>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <td>id</td>
                <td>Title</td>
                <td>Context</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {result.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.context}</td>
                  <td>
                    <Link to ={'edit/'+blog.id}  className="btn btn-primary" > <i className="fa-solid fa-pen-to-square"/></Link>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
