import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  coins: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export default User;