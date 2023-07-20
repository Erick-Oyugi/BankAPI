const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({
    transactionType: {
    type: String,
    required: [true, 'TransactionType Field should be included']
  },
    transactionReference: {
    type: String,
    required: [true, 'TransactionReference Field  is Required']
  },
   currency: {
    type: String,
    required: [true, 'Currency Field  is Required']
  
  },

  clientId:{
    type: String,
    required:[true, 'Client ID Field  Required']
  },

  api_key: {
        type: String,
        required: [true, 'api-key Field  is Required']
   },

  surname: {
    type: String,
    required: false

   },

  firstName:{
    type: String,
    required: [true, 'FirstName Field  is Required']

  },

  lastName:{
    type: String,
    required: [true, 'LastName Field  is Required']

  },

  email:{
    type: String,
    required: [true, 'Email Field  is Required']

  },

  deviceId:{
    type: String,
    required: true

  },

  imsi:{
    type: String,
    required: [true, 'Imsi Field  is Required']

  },

//   dateofBirth: {
//     type: Date,
//     required: [true, 'Date of Birth Field  is Required']

//   },

  phoneNumber:{
    type: String,
    required: [true, 'PhoneNumber Field  is required']

  },

  gender:{
    type: String,
    required: [true, 'Gender Field is Required'] 

  },

  creationDate: {
    type: Date,
    required: true,
    default: Date.now

  }






  }
)

module.exports = mongoose.model('CreateWallet', walletSchema)