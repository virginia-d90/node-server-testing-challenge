const db = require('../data/db-config')

module.exports ={
    get,
    findById,
    insert,
    remove
}

function get(){
    return db('users')
}

function findById(id){
    return db('users')
        .where({id})
        .first()
}

async function insert(user){
    const [id] = await db('users').insert(user, 'id')
    return db('users')
        .where({id})
        .first()
}

function remove(id){
    return db('users')
        .del()
        .where({id})
}