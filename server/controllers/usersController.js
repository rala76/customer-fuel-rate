const User = require('../models/User')
const FuelQuote = require('../models/FuelQuote')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB without their password
    const users = await User.find().select('-password').lean()

    // If no users
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
})

// @desc Create a new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, name, address1, address2, city, state, zipCode } = req.body

    // Confirm data
    if (!username || !password || !name || !address1 || !city || !state || !zipCode) {
        return res.status(400).json({ message: 'Missing field(s)' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10) // '10 Salt rounds'

    // Define User Object
    const userObject = {
        "username": username,
        "password": hashedPwd,
        "name": name,
        "address1": address1,
        "address2": address2,
        "city": city,
        "state": state,
        "zipCode": zipCode
    }

    // Create and store new user
    const user = await User.create(userObject)

    if (user) { // Created
        res.status(201).json({ message: `New user ${username} created` })
    } else { // Not Created/Saved
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { id, username, password, name, address1, address2, city, state, zipCode } = req.body

    // Confirm data (username, password, address2 are optional)
    if (!id || !name || !address1 || !city || !state || !zipCode) {
        return res.status(400).json({ message: 'Missing field(s)' })
    }

    // Does the user exist to update?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // // Check for duplicate
    // const duplicate = await User.findOne({ username }).lean().exec()

    // // Allow updates to the original user
    // if (duplicate && duplicate?._id.toString() !== id) {
    //     return res.status(409).json({ message: 'Duplicate username' })
    // }

    // Check for duplicate if username given
    if (username) {
        const duplicate = await User.findOne({ username }).lean().exec()

        // Allow updates to the original user that already exists
        if (duplicate && duplicate?._id.toString() !== id) {
            return res.status(409).json({ message: 'Duplicate username' })
        }

        // Update Username of User Object
        user.username = username
    }

    // Update User Object
    // user.username = username
    user.name = name
    user.address1 = address1
    user.address2 = address2
    user.city = city
    user.state = state
    user.zipCode = zipCode

    if (password) {
        // Hash password
        user.password = await bcrypt.hash(password, 10) // '10 Salt Rounds'
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    // Does the user have previous fuel quotes?
    const fuelQuote = await FuelQuote.findOne({ user: id }).lean().exec()
    if (fuelQuote) {
        return res.status(400).json({ message: 'User has fuel quote history' })
    }

    // Confirm user exists to delete
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }
    
    // Delete user and store deleted user information
    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}