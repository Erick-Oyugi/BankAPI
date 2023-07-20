const asyncHandler = require('express-async-handler')


const CreateWallet = require('../../model/createWallet')

//@route https://localhost:8001/api/bank/wallet-registration
//POST method
//new wallet registration

// @controller
const createWallet = async (req,res) =>{
  
    const createwallet = new CreateWallet({
        transactionType : req.body.transactionType,
        transactionReference : req.body.transactionReference,
        currency : req.body.currency,
        clientId: req.body.clientId,
        api_key: req.body.api_key,
        surname: req.body.surname,
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        deviceId:req.body.deviceId,
        imsi:req.body.imsi,
        // dateofBirth:req.body.dateofBirth,
        phoneNumber:req.body.phoneNumber,
        gender:req.body.gender,
        creationDate:req.body.creationDate

    })

    try {
        const newWalletAccount = await createwallet.save()
        res.status(201).json(newWalletAccount)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }    

}

module.exports = {
    createWallet
}