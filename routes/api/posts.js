const express = require('express');

// using express router to route requests
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Posts route');
});

module.exports = router;