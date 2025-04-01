require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "SG_Guilds",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
