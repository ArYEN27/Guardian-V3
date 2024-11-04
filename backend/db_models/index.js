import sequelize from "../config/database.js";
import User from "./User.js";
import History from "./History.js";

const initModels = async () => {
  await sequelize.sync({ force: false });
  console.log("All models synchronized successfully.");
};

export { sequelize, initModels, User, History };
