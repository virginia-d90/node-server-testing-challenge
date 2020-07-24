const router = require('express').Router()
const Users = require('./user-model')

router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json({data: users})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:"could not get a list of users"})
        })
})

router.post('/', (req, res) => {
    const user = req.body
    Users.insert(user)
        .then(([id]) => {
            Users.findById(id)
                .then(user => {
                    return res.status(201).json({data: user})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:"could not add user"})
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    Users.findById(id)
        .then(response => {
            if(response){
                Users.remove(id).then(() => {
                    res.status(200).json({deleted: response})
                })

            }else {
                res.status(404).json({message:"user with specified id does not exist"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "server could not delete user"})
        })
})



module.exports = router 