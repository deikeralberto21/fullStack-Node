import db from "../database/db.js";

import {DataTypes} from 'sequelize'

const BlogModel = db.define('blogs',{
    tittle: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

export default BlogModel