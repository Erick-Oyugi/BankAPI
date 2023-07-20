
const asyncHandler = require('express-async-handler')


//@route /bank/accountbalance GET Account Balance
const getAPI = asyncHandler(async (req,res) => {
    const apis = await Api.find()

    res.status(200).json(apis)

})


module.exports = {
    getAPI
}