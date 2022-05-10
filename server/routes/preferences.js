const express = require('express')
const savePreferences = require('../controllers/preferences/savePreferences')
const { request } = require('express')

// initialize router
const router = express.Router()

// POST at route: http://localhost:8080/preferences/save
router.post('/save', [], savePreferences)


module.exports = router
