import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Card = sequelize.define("cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: {
    type: DataTypes.ENUM("attack", "defense", "heal", "special", "malus", "bonus"),
    allowNull: false,
  },
  rarity: {
    type: DataTypes.ENUM("common", "rare", "epic", "legendary"),
    allowNull: false,
  },
  color: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true }, 
});

export default Card;
