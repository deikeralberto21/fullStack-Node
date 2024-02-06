import express from 'express'
const routes = express.Router()
import {getAllBlogs, getBlog, deleteBlog, UpdateBlog, createBlog} from '../controllers/blogController.js'

// GET
routes.get('/', getAllBlogs)
routes.get('/:id', getBlog)
routes.post('/', createBlog)// POST
routes.put('/:id', UpdateBlog)// PUT
routes.delete('/:id', deleteBlog) // DELETEE 

export default routes

