const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.status(200).json({
  'message': 'Hello World',
  'code': '200'
}));

module.exports = router;