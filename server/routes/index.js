const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>');
});

module.exports = router;