const express = require("express");
const router = express.Router();
const {projects} = require("../data")
const {authUser} = require("../basicAuth")
const {canView, scopedUser} = require("../permission")

router.get('/',authUser, (req, res) => {
    res.json(scopedUser(req.user, projects))
});

router.get('/:projectId',setProject, authUser, authGetProject,(req, res) => {
    res.json(req.project)
})

function setProject(req, res, next){
    const projectId = parseInt(req.params.projectId)
    req.project = projects.find(project => project.id === projectId)

    if(req.project == null){
        res.status(404)
        return res.send('project not found')
    }
    next()
}

function authGetProject(req, res, next){
    if(!canView(req.user, req.project)){
        res.status(401)
        return res.send("Not Allowed")
    }
    next()
}

module.exports = router;