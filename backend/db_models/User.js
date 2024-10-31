import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secondaryEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  appKey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,  // Disable createdAt and updatedAt
});

export default User;
