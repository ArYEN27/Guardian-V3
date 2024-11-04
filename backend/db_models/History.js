import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const History = sequelize.define("History", {
  sessionID: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => new Date().toISOString(),
  },
  userId: {
    type: DataTypes.STRING,
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
    allowNull: true,
  },
},
{
    timestamps: false,  // Disable createdAt and updatedAt
});

User.hasMany(History, { foreignKey: "userId" });
History.belongsTo(User, { foreignKey: "userId" });

export default History;
