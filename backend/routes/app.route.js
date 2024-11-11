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


router.post("/signin", async (req, res) => {
  try {

    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res.status(400).json({ message: 'Email & Password are required' });
    }

    const currUser = await User.findOne({ where: { emailId: `${emailId}` } });
    console.log('Found user:', currUser);


    if (!currUser) {
      res.json({ message: 'User not found' });
    }
    
    if (currUser.password === password) {
      return res.json({ message: "User verified successfully", currUser });
    }
    else {
      res.status(404).json({ message: 'Invalid Password' });
    }
  } catch (error) {
    console.error('Error verifying user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post("/reset-pass", async (req, res) => {
  try {
    
    const { emailId, newpass, confirmpass } = req.body;
    console.log(emailId, newpass, confirmpass);
    
    if (newpass !== confirmpass) {
      return res.status(200).json({ message: "Passwords don't match!" });
    }

    const currUser = await User.findOne({ where: { emailId: `${emailId}` } });
    currUser.password = newpass;
    await currUser.save();

    res.json({ message: "Password updated successfully!" });    
  } catch (err) {
    console.error('Error updating password', err.message);
    return res.status(500).json({ message: "Internal server error!" });
  }


});

// Test    
router.get("/users", async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
