const express = require('express');
const router = express.Router();

// http://localhost:5000/api/profile/test
// @route GET api/profile/test
// @desc Tests profile routes
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

module.exports = router;
