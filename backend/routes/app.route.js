import express from "express";
import { User, History } from "../db_models/index.js";
import Op from "sequelize"

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

    const { emailId } = req.body;

    if (!emailId) {
      return res.status(400).json({ message: 'Email & Password are required' });
    }

    console.log('Received emailId:', emailId);

    const currUser = await User.findOne({ where: { emailId: `${emailId}` } });

    console.log('Found user:', currUser);
    // console.log('User dataValues:', currUser ? currUser.dataValues : 'No user found');


    if (currUser) {
      // Return the user details if found
      res.json({ message: 'User found', user: currUser.dataValues });
    } else {
      // Return a 404 status if the user is not found
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

    //   // const {  emailId, password } = req.body;
  
    //   // const user = await User.find({
    //   //   emailId,
    //   //   password,
    //   // });
  
    //   res.status(201).json({ message: "User found", data: `${user.email} & ${user.password}` });
    // } catch (error) {
    //   res.status(500).json({ message: "Error creating user", error: error.message });
    
router.get("/users", async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
