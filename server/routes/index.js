const express = require('express');
const feed = require('../Controllers/feed')

const router = express.Router();

router.get('/', (req, res) => {res.status(200).json('hello')});
router.get('/feed', feed);

module.exports = router;