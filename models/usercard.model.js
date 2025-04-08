import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const UserCard = sequelize.define("user_cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  card_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

export default UserCard;