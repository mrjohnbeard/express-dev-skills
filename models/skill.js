const skills = [
    {id: 123456, skill: "nodeJS", skillTest: '2/10'},
    {id: 654321, skill: "javaScript", skillTest: '5/10'},
    {id: 123123, skill: "Python", skillTest: '-2/10'},
    {id: 456654, skill: "HTML", skillTest: '7/10'},
    {id: 123000, skill: "mongoDB", skillTest: 'LOL'},

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,

};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find((skill) => skill.id == id);
}

function create (skillObj) {
    skillObj.id = (Math.floor(Math.random() * 100000));
    skillObj.skillTest = '-/10'
    skills.push(skillObj);
}

function deleteOne (id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}