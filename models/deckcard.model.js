import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const DeckCard = sequelize.define("deck_cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  deck_id: { type: DataTypes.INTEGER, allowNull: false },
  card_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 2 },
});

export default DeckCard;