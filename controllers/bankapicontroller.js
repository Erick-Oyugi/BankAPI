const asyncHandler = require('express-async-handler')


const Api = require('../model/apiModel');
const Subscriber = require('../model/subscriber')
const CreateAccount = require('../model/createAccount')
const AccountDetails = require('../model/accountDetails')
const CreateWallet = require('../model/createWallet')

//@route /bank/accountbalance GET Account Balance
const getAccountBalance = asyncHandler(async (req,res) => {
    const apis = await Api.find()

    res.status(200).json(apis)

})


//@route /bank/account-details  
//@GET n
const getAccountDetails = asyncHandler(async(req,res) => {

    res.status(200).json(apis)


})


//@route /bank/internal-transfer POST Internal Transfers
const sendTransfer = async(req,res) =>{
 const goalSubscriber = new Subscriber({

    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
    subscribeDate : req.body.subscribeDate

 })
    res.status(200).json(goalSubscriber)
}

//@route /api/bank/create-account
//@POST
// const accountCreation = async (req, res)=>{

//     const createaccount = new CreateAccount({
//         firstName : req.body.firstName,
//         middleName : req.body.middleName,
//         phoneNumber : req.body.phoneNumber,
//         kraPinNumber: req.body.kraPinNumber,
//         documentType: req.body.documentType,
//         email:req.body.email,
//         accountType: req.body.accountType,
//         creationDate: req.body.creationDate

//     })

//     try {
//         const newCreatedAccount = await createaccount.save()
//         res.status(201).json(newCreatedAccount)
//       } catch (err) {
//         res.status(400).json({ message: err.message })
//       }
// }

// //@route http://localhost:8001/api/bank/account-details
// //@POST method
// //query db to get details of a bank
// const accountDetails = async (req, res)=>{

//     const { accountNumber } = req.body;
   
//     // const accountdetails = new AccountDetails({
//     //     accountNumber: req.body.accountNumber,    
//     // })

//     try {
//         const newAccountDetails = await AccountDetails.find({ accountNumber: accountNumber})
//         console.log(newAccountDetails)
//         res.status(200).json(newAccountDetails)
//       } catch (err) {
//         res.status(400).json(
//             {
//             Message:'Internal Server Error',
//             Info: err.message 
              
//             })
//       }
// }

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

    getAccountBalance, getAccountDetails, sendTransfer,createWallet

}