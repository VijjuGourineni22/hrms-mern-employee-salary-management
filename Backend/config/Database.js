import { Sequelize } from 'sequelize';

const db = new Sequelize('db_penggajian3', 'root', 'Vijjiammulu@14785', {
    host: "localhost",
    dialect: "mysql"
});

export default db;