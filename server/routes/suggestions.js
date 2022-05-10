const express = require('express')
const getSuggestions = require('../controllers/suggestions/getSuggestions')

// initialize router
const router = express.Router()

// GET at route: http://localhost:8080/suggestions
router.get('/:username', [], getSuggestions)


module.exports = router
