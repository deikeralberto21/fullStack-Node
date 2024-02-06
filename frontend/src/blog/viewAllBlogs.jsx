import axios from 'axios'
import { useEffect, useState} from 'react'


const URI = "http://localhost:8000/blogs/"

const ShowBlogs = ()=>{
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])
    
    const getBlogs= async()=>{
        try {
            const res = await axios.get(URI)
            setBlogs(res.data)
        } catch (error) {
            setBlogs("error")
        }
    }

    const deleteBlog = async ()=>{
        axios.delete(`${URI}${id}`)
        getBlogs()
    }
    if(blogs=="error"){
        return(
            <h1>ERROR SERVER CONECTION</h1>
        )
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tittle</th>
                    <th>Content</th>            
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog)=>(
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.tittle}</td>
                        <td>{blog.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ShowBlogs