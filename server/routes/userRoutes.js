const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

// CRUD:
// GET = READ
// POST = CREATE
// PATCH = UPDATE
// DELETE = DELETE

// Handles any 'get, post, patch, delete' request that comes to our REST API at '/users' (Directed to Controllers)
router.route('/')
    .get(verifyJWT, usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(verifyJWT, usersController.updateUser)
    .delete(verifyJWT, usersController.deleteUser)

module.exports = router