const {ROLE } = require("./data")

function canView(user, projects){
    return (
        user.role === ROLE.ADMIN || projects.userId === user.id
    )
}

function scopedUser(user, projects){
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userId === user.id)
}

module.exports = {
    canView,
    scopedUser
}