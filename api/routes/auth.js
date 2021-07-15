const express = require("express");
const router = express.Router();
const User = require("../models/User");
const argon2 = require("argon2");

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await argon2.hash(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(400).json("Wrong credentials!");
    const valid = await argon2.verify(user.password, req.body.password);
    !valid && res.status(400).json("Wrong credentials!")
    
    // argon2.verify(user.password, req.body.password).then(match => {
    //     if (match) {
    //       console.log(user.password);
    //     } else {
    //         console.log(user.password);
    //     }
    //   }).catch(err => {
    //     console.log("err3");
    //   });
    const { password, ...others } = user._doc
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
