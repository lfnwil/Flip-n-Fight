import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Match = sequelize.define("matches", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  player1_id: { type: DataTypes.INTEGER, allowNull: false },
  player2_id: { type: DataTypes.INTEGER, allowNull: false },
  winner_id: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export default Match;
