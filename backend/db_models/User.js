import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: true,
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

User.beforeCreate((user) => {
  const usernamePart = user.username.substring(0, 5);  // 5 characters of the username
  const timestamp = new Date().toISOString().replace(/[-:.]/g, "");  // Current date and time, formatted
  user.userId = `${usernamePart}${timestamp}`;
  
  console.log("Generated userId:", user.userId);
  });

export default User;
