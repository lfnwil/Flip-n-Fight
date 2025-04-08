import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Deck = sequelize.define("decks", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, defaultValue: "Main Deck" },
});

export default Deck;