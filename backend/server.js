import express from "express";
import dotenv from "dotenv";
import path from "path";
import appRoutes from "./routes/app.route.js";
import { sequelize, initModels, User, History } from "./db_models/index.js";

const app = express();
const port = 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use("/api", appRoutes);

// Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

// Images
app.use('/static', express.static(path.join(__dirname, 'public')));


(async () => {
  try {
    await sequelize.authenticate();
    await initModels();
    console.log("Database connected and models initialized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Website/website.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "/Website/signUp.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
