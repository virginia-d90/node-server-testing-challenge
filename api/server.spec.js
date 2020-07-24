const server = require('./server')
const db = require('../data/db-config')
const supertest = require('supertest')

describe("server", function () {
    it("runs the tests", function () {
        expect(true).toBe(true);
    })
})

describe("GET / users", function(){
    it("should respond with 200 OK", function(){
        return supertest(server)
            .get('/api/users')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

    it('returns an array when called', () => {
        
    })
})