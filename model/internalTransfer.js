const mongoose = require('mongoose')

const internalTransferSchema = new mongoose.Schema({
 amount: {
    type: Number,
    required: [true, 'First Name Field should be included']
  },
  
   accountFrom: {
    type: String,
    required: [true,'Debit Account Is Required']
  
  },

  accountTo:{
    type: String,
    required:[true, 'Credit Account Is Required']
  },

  PaymentNarrative: {
        type: String,
        required: true
   },

  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }






  }
)

module.exports = mongoose.model('InternalTransfer', internalTransferSchema)