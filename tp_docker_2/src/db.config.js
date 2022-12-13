// Uncomment this block to use sqlite
// module.exports = {
//     dialect: "sqlite",
//     storage: "./my-db.sqlite",
// }

// Uncomment this block to use mysql
module.exports = {
    dialect: process.env.DB_DIALECT || "mysql",
    hostname: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "quentin",
    password: process.env.DB_PASSWORD || "quentin",
    database: process.env.DB_NAME || "quentin",
    port: process.env.DB_PORT || 3306
}
