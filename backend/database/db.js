import { Sequelize } from 'sequelize'

const db = new Sequelize('database_app', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
    logging:false
})

export default db