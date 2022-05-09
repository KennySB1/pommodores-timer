const express = require('express')
const save = require('../controllers/pomodoros/save')

// initialize router
const router = express.Router()

router.post('/save', [], save)

module.exports = router