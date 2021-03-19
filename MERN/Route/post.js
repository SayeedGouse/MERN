const express = require('express')
const router = express.Router()
const Post = require('../models/post')
//get all data
router.get('/', async (req, res) => {
  try {
    const getData = await Post.find()
    res.json(getData)
  } catch (error) {
    res.json({ message: error })
  }
})
//post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })
  const savePost = await post.save()
  try {
    res.json(savePost)
  } catch (err) {
    res.json({
      message: err,
    })
  }
})
//get specific user data
router.get('/:postId', async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId)
    res.json(specificPost)
  } catch (error) {
    res.json({ message: error })
  }
})
// Delete specific user

router.delete('/:postId', async (req, res) => {
  try {
    const removeUser = await Post.remove({ _id: req.params.postId })
    res.json(removeUser)
  } catch (error) {
    res.json({ message: error })
  }
})
//Update Specific user
router.patch('/:postId', async (req, res) => {
  try {
    const updateUser = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
        },
      }
    )
    res.json(updateUser)
  } catch (error) {
    res.json({ message: error })
  }
})
module.exports = router
