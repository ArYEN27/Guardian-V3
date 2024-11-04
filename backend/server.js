import express from "express"
import dotenv from "dotenv"
import { sequelize, initModels, User, History } from "./db_models/index.js"

const app = express();
const port = 5000;

(async () => {
  try {
    await sequelize.authenticate();
    await initModels();
    console.log("Database connected and models initialized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get('/', (req, res) => {
    res.send('Refresh works!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })