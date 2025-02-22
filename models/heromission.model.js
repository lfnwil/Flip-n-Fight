import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Hero from "./Hero.js";
import Mission from "./Mission.js";

const HeroMission = sequelize.define(
  "HeroMission",
  {},
  { timestamps: false }
);

Hero.belongsToMany(Mission, { through: HeroMission });
Mission.belongsToMany(Hero, { through: HeroMission });

export default HeroMission;
