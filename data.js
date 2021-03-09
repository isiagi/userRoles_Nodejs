const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'geof', role: ROLE.ADMIN},
        {id: 2, name: 'sally', role: ROLE.BASIC},
        {id: 3, name: 'joe', role: ROLE.BASIC}
    ],
    projects: [
        {id: 1, name: "geof's project", userId: 1},
        {id: 2, name: "sally's project", userId: 2},
        {id: 3, name: "geof's project", userId: 3}
    ]
}