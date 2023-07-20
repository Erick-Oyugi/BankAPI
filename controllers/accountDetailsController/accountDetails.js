const asyncHandler = require('express-async-handler')


const AccountDetails = require('../../model/accountDetails')

//@route http://localhost:8001/api/bank/account-details
//@POST method
//query db to get details of a bank
const accountDetails = async (req, res)=>{

    const { accountNumber } = req.body;
   
    // const accountdetails = new AccountDetails({
    //     accountNumber: req.body.accountNumber,    
    // })

    try {
        const newAccountDetails = await AccountDetails.find({ accountNumber: accountNumber})
        console.log(newAccountDetails)
        res.status(200).json(newAccountDetails)
      } catch (err) {
        res.status(400).json(
            {
            Message:'Internal Server Error',
            Info: err.message 
              
            })
      }
}

module.exports = {
    accountDetails
}