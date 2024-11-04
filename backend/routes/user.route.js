import express from "express";
import { User, History } from "../db_models/index.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { username, emailId, password, secondaryEmail, appKey } = req.body;
    
        const newUser = await User.create({
          username,
          emailId,
          password,
          secondaryEmail,
          appKey,
        });
    
        res.status(201).json({ message: "User created successfully", user: newUser });
      } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
      }
});
    
router.get("/users", async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
