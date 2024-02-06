const express = require('express');

// using express router to route requests
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Profile route');
});

module.exports = router;