const asyncHandler = require('express-async-handler')
const CreateAccount = require('../../model/createAccount')





//@route /api/bank/create-account
//@POST
const accountCreation = async (req, res)=>{

    const createaccount = new CreateAccount({
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        phoneNumber : req.body.phoneNumber,
        kraPinNumber: req.body.kraPinNumber,
        documentType: req.body.documentType,
        email:req.body.email,
        accountType: req.body.accountType,
        creationDate: req.body.creationDate

    })

    try {
        const newCreatedAccount = await createaccount.save() //save to database
        res.status(201).json(newCreatedAccount);

        console.log(newCreatedAccount);
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
}

module.exports = {
    accountCreation
}

