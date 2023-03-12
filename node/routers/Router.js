import express from "express"
import { addBlog, deleteBlog, getAllBlog, getBlog, updateBlog } from "../controllers/BlogController.js"

const router = express.Router()
router.get('/', getAllBlog )
router.get('/:id', getBlog)
router.post('/', addBlog )
router.put('/:id',updateBlog)
router.delete('/:id', deleteBlog)

export default router