import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";

const Contacts = sequelize.define('Contacts', {
  sno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  msg: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['sno']
    },
  ],
});

export default Contacts;
