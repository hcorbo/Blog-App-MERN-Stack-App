const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const argon2 = require("argon2");

//Update user
router.put("/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } else {
      res.status(401).json("You have permission to update only your account!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete user
router.delete("/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
      } catch (err) {
        return res.status(500).json(err);
      }
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User has been deleted...");
    } else {
      return res
        .status(401)
        .json("You have permission to delete only your account!");
    }
  } catch (err) {
    res.status(404).json("User not found!");
  }
});

//Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
