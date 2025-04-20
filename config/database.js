import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
  logging: console.log,
  logging: true,
});

export default sequelize;