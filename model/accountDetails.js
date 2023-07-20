const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    accountNumber: {
    type: String,
    required: [true, 'Account Number Field should be included']
  },


  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }






  }
)

module.exports = mongoose.model('AccountDetails', subscriberSchema)