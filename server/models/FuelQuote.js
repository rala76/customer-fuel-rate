const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose)

const fuelQuoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    deliveryAddress: {
        type: String,
        required: false
    },
    deliveryDate: {
        type: String,
        required: false
    },
    pricePerGallon: {
        type: Number,
        required: false
    },
    gallonsRequested: {
        type: Number,
        required: false
    },
    totalCost: {
        type: Number,
        required: false
    }
})

// Doesn't seem to work?? Might just ingore or remove later
// fuelQuoteSchema.plugin(AutoIncrement, {
//     inc_field: 'quoteId',
//     id: 'quoteIdNums',
//     start_seq: 500
// })

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema)