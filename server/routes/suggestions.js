const express = require('express')
const getSuggestions = require('/Users/harry/Projects/pommodores-timer/server/controllers/suggestions/getSuggestions')

// initialize router
const router = express.Router()

// GET at route: http://localhost:8080/suggestions
router.get('/', [], getSuggestions)


module.exports = router
