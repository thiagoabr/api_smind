require('dotenv').config(); 

module.exports = {
    dialect: "mysql",
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true
    },
    logging: false,
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta",
    seederStorage: "sequelize",
    seederStorageTableName: "sequelize_data"
}