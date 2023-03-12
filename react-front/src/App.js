import "./App.css";
import { ShowBlog } from "./blog/ShowBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlog />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/edit/:id" element={< EditBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
