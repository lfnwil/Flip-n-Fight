import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Mission = sequelize.define(
  "Mission",
  {
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
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    defaultScope: {
      where: {
        isDeleted: false,
      },
    },
    scopes: {
      deleted: {
        where: {
          isDeleted: true,
        },
      },
      withDeleted: {},
    },
  }
);

export default Mission;
