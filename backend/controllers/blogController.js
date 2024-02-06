import BlogModel from "../models/blogModel.js";

// Metodos para el controlador

// getAll
export const getAllBlogs = async(req,res)=>{
    try {
        const bLogs = await BlogModel.findAll();
        res.json(bLogs)
    } catch (error) {
        res.json({"message": error.message})
    }
}

// GET

export const getBlog = async(req,res)=>{
    try {
        const bLogs = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(bLogs[0])
    } catch (error) {
        res.json({"message": error.message})
    }
} 

//  Create

export const createBlog = async (req,res)=>{
    try {

        await BlogModel.create({
            tittle:req.body.tittle,
            tittle:req.body.content
        })
        res.json({
            "message":"Registro Completado"
        }) 
    } catch (error) {
        res.json({"message": error.message})
    }
}

export const UpdateBlog = async (req,res)=>{
    try {
        await BlogModel.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({
            "message":"Actualizado Correctamente"
        }) 
    } catch (error) {
        res.json({"message": error.message})
    }
}

export const deleteBlog = async (req, res)=>{
    try {
        await BlogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"Eliminado Correctamente"
        }) 
    } catch (error) {
        res.json({"message": error.message})
    }
}