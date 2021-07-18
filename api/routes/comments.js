const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment")

//Create comment
router.post("/", async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all comments
router.get("/:id", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error)
    }
});

// //Update post
// router.put("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (req.body.username === post.username) {
//       const updatedPost = await Post.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );

//       res.status(200).json(updatedPost);
//     } else {
//       res.status(401).json("You have permission to update only your posts!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //Delete post
// router.delete("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (req.body.username === post.username) {
//       await Post.findByIdAndDelete(req.params.id);
//       res.status(200).json("Post has been deleted...");
//     } else {
//       res.status(401).json("You have permission to delete only your posts!");
//     }
//   } catch (err) {
//     res.status(404).json("Post not found!");
//   }
// });

// //Get user
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
