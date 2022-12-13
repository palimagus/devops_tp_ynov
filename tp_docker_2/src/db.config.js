// Uncomment this block to use sqlite
// module.exports = {
//     dialect: "sqlite",
//     storage: "./my-db.sqlite",
// }

// Uncomment this block to use mysql
module.exports = {
    dialect: "mysql",
    hostname: "172.17.0.2",
    username: "root",
    password: "1234",
    database: "quentin",
    port: 3306
}

// TODO : adapt this file to load parameters from environment variables (process.env.VARIABLE_NAME)