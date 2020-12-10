const express = require('express');
const router = express.Router();

router.get('/api/hello', (req, res) => {
  res.json('Well, hello there! (sever) ♥');
});

module.exports = router;