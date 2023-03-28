const FuelQuote = require('../models/FuelQuote')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all fuel quotes
// @route GET /fuelQuotes
// @access Private
const getAllFuelQuotes = asyncHandler(async (req, res) => {
    // Get all fuel quotes from MongoDB
    const fuelQuotes = await FuelQuote.find().lean()

    // If no fuel quotes
    if (!fuelQuotes?.length) {
        return res.status(400).json({ message: 'No fuel quotes found' })
    }

    // Add username to each fuel quote before sending the response
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE
    // You could also do this with a for...of loop
    // const fuelQuotesWithUser = await Promise.all(fuelQuotes.map(async (fuelQuote) => {
    //     const user = await User.findById(fuelQuote.user).lean().exec()
    //     return { ...fuelQuote, username: user.username }
    // }))

    // res.json(fuelQuotesWithUser)
    res.json(fuelQuotes)
})

// @desc Create new fuel quote
// @route POST /fuelQuotes
// @access Private
const createNewFuelQuote = asyncHandler(async (req, res) => {
    const { user, deliveryAddress, deliveryDate, pricePerGallon, gallonsRequested, totalCost } = req.body

    // Confirm data
    if (!user || !deliveryAddress || !deliveryDate || !pricePerGallon || !gallonsRequested || !totalCost) {
        return res.status(400).json({ message: 'Missing field(s)' })
    }

    // const userOfFuelQuote = await User.findById(user).lean().exec()

    // Define Fuel Quote Object
    const fuelQuoteObject = {
        // "user": userOfFuelQuote._id,
        "user": user,
        "deliveryAddress": deliveryAddress,
        "deliveryDate": deliveryDate,
        "pricePerGallon": pricePerGallon,
        "gallonsRequested": gallonsRequested,
        "totalCost": totalCost
    }

    // Create and store new fuel quote
    const fuelQuote = await FuelQuote.create(fuelQuoteObject)

    if (fuelQuote) { // Created
        return res.status(201).json({ message: 'New fuel quote created' })
    } else { // Not Created
        return res.status(400).json({ message: 'Invalid fuel quote data received' })
    }
})

// @desc Update a fuel quote
// @route PATCH /fuelQuotes
// @access Private
const updateFuelQuote = asyncHandler(async (req, res) => {
    const { id, user, deliveryDate, pricePerGallon, gallonsRequested, totalCost } = req.body

    // Confirm data (username, password, address2 are optional)
    if (!id || !user || !deliveryDate || !pricePerGallon || !gallonsRequested || !totalCost) {
        return res.status(400).json({ message: 'Missing field(s)' })
    }

    // Does the fuel quote exist to update?
    const fuelQuote = await FuelQuote.findById(id).exec()

    if (!fuelQuote) {
        return res.status(400).json({ message: 'Fuel quote not found' })
    }

    // Update Fuel Quote Object
    fuelQuote.user = user
    fuelQuote.deliveryDate = deliveryDate
    fuelQuote.pricePerGallon = pricePerGallon
    fuelQuote.gallonsRequested = gallonsRequested
    fuelQuote.totalCost = totalCost

    const updatedFuelQuote = await fuelQuote.save()

    res.json({ message: `Fuel quote with ID ${updatedFuelQuote._id} updated` })
})

// @desc Delete a fuel quote
// @route DELETE /fuelQuotes
// @access Private
const deleteFuelQuote = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Fuel quote ID required' })
    }

    // Confirm fuel quote exists to delete
    const fuelQuote = await FuelQuote.findById(id).exec()

    if (!fuelQuote) {
        return res.status(400).json({ message: 'Fuel quote not found' })
    }
    
    // Delete fuel quote and store deleted fuel quote information
    const result = await fuelQuote.deleteOne()

    const reply = `Fuel quote with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllFuelQuotes,
    createNewFuelQuote,
    updateFuelQuote,
    deleteFuelQuote
}