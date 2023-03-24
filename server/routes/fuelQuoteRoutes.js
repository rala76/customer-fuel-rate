const express = require('express')
const router = express.Router()
const fuelQuotesController = require('../controllers/fuelQuotesController')
const verifyJWT = require('../middleware/verifyJWT')

// CRUD:
// GET = READ
// POST = CREATE
// PATCH = UPDATE
// DELETE = DELETE

router.use(verifyJWT)

// Handles any 'get, post, patch, delete' request that comes to our REST API at '/fuelQuotes' (Directed to Controllers)
router.route('/')
    .get(fuelQuotesController.getAllFuelQuotes)
    .post(fuelQuotesController.createNewFuelQuote)
    .patch(fuelQuotesController.updateFuelQuote)
    .delete(fuelQuotesController.deleteFuelQuote)

module.exports = router