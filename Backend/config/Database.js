import { Sequelize } from 'sequelize';

const db = new Sequelize('penggajian', 'root', 'Vijjiammulu@14785', {
    host: "localhost",
    dialect: "mysql"
});

export default db;