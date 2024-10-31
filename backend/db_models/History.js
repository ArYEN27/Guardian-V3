import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const History = sequelize.define("History", {
  sessionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    defaultValue: DataTypes.NOW,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "userId",
    },
    onDelete: "CASCADE",
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
    timestamps: false,  // Disable createdAt and updatedAt
});

User.hasMany(History, { foreignKey: "userId" });
History.belongsTo(User, { foreignKey: "userId" });

export default History;
