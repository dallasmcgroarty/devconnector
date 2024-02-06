const express = require('express');

// using express router to route requests
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Auth route');
});

module.exports = router;