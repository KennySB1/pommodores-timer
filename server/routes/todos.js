const express = require('express')
const saveTodos = require('../controllers/todos/saveTodos')

// initialize router
const router = express.Router()

// POST at route: http://localhost:8080/todos/save
router.post('/save', [], saveTodos)


module.exports = router
