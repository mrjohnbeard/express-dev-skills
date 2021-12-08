var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// GET /todos/new - New route
router.get('/new', skillsCtrl.new);

// GET "/skills/:id - Show Route
router.get('/:id', skillsCtrl.show);

// POST "/todos" - Create Route
router.post('/', skillsCtrl.create);


//DELETE "/todos/:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
