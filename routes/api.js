const router = require('express').Router();
const NoSQL = require('nosql');
const projectsDB = NoSQL.load('./database/projects.nosql');
const languagesAndFrameworksDB = NoSQL.load('./database/languagesAndFrameworks.nosql')

router.get('/projects', (req, res) => {
    projectsDB.find().make(function(filter) {
        filter.callback(function(err, response) {
            res.send(response)
        })
    })
})

router.get('/languagesAndFrameworks', (req, res) => {
    languagesAndFrameworksDB.find().make(function(filter) {
        filter.callback(function(err, response) {
            res.send(response)
        })
    })
})



module.exports = router;