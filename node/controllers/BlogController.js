import BlogModel from "../models/BlogModel.js";

// definimos los metodo del crud//

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }

};

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message, error: "encontrado error" });
  }
};

export const addBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({ message: "registro creado con exito" });
  } catch (error) {
    res.json({ message: error.message, error: "encontrado error" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "registro actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({message:"Registro eliminado con exito"})
    } catch (error) {
        res.json({ message: error.message });
    }
};
