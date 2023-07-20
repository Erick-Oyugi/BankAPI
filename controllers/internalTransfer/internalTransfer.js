const InternalTransfer = require('../../model/internalTransfer')

//@route /api/bank/create-account
//@POST
const internalTransfer = async (req, res)=>{

    const internalTransfer = new InternalTransfer({
        amount : req.body.amount,
        accountFrom : req.body.accountFrom,
        accountTo : req.body.accountTo,
        paymentNarrative: req.body.paymentNarrative,
        creationDate: req.body.creationDate

    })

    try {
        const newTransaction = await internalTransfer.save()
        res.status(201).json(newTransaction)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
}

module.exports = {
    internalTransfer
}