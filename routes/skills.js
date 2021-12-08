var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// GET "/skills/:id - Show Route
router.get('/:id', skillsCtrl.show);


module.exports = router;
