const express = require('express');
const { getAllActivities } = require('../controllers/activityController');

const router = express.Router();

// Public endpoint to list activities
router.get('/', getAllActivities);

module.exports = router;