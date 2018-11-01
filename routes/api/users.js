const express = require('express');
const router = express.Router();

// http://localhost:5000/api/users/test
// @route GET api/users/test
// @desc Tests users routes
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
