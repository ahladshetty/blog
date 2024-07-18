import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";

const Posts = sequelize.define('Posts', {
  sno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(21),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  img_url: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  indexes: [
    {
      timestamps: false,
      unique: true,
      fields: ['sno']
    },
  ],
});

export default Posts;
