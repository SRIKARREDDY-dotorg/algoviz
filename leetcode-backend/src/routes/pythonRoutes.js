const express = require('express');
const { executePythonCode } = require('../controllers/pythonController');

const router = express.Router();

// Route to execute Python code
router.post('/execute', executePythonCode);

module.exports = router;
