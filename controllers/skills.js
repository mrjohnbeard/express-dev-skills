const Skill = require('../models/skill');

module.exports = {
index,
show,
create,
new: newSkill,
delete: deleteSkill,
}

function index(req, res) {
    let skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill } );
}

function create (req,res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill (req,res) {
    res.render('skills/new');
}

function deleteSkill (req,res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

