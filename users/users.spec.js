const db = require('../data/db-config')
const Users = require('./user-model')
const supertest = require('supertest')


describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('insert function', () => {
        it('inserts a user into the db', async () => {
            let usersCount;
            usersCount = await db('users')
            expect(usersCount).toHaveLength(0);
            await Users.insert({username:"Virginia", password:"taco"});
            usersCount = await db('users');
            expect(usersCount).toHaveLength(1)
        })

        it('inserts the entered user into the db', async () => {
            let user = await Users.insert({username: "Virginia2", password:"taco2"});
            expect(user.username).toBe("Virginia2")
        })
    })

    describe('find by id', () => {
        it('should find item by id', async () => {
            await Users.insert({username: "Virginia3", password: "taco3"})
            await Users.insert({username: "Virginia4", password: "taco4"})

            let userId = await Users.findById(2)
                expect(userId.id).toEqual(2)
        })
    })
})