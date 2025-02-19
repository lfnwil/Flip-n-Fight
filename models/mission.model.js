import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Mission = sequelize.define("missions", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Hero.belongsToMany(Mission, { through: "HeroMissions" });
Mission.belongsToMany(Hero, { through: "HeroMissions" });

export default Mission;