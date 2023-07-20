const express = require('express');
const router = express.Router();
const {getAccountBalance, sendTransfer} = require('../controllers/bankapicontroller')
const {accountCreation} = require('../controllers/createAccountController/createAccount')
const {accountDetails} = require('../controllers/accountDetailsController/accountDetails')
const {createWallet} = require('../controllers/createWalletController/createWallet')
const {getAPI} = require('../controllers/getApiController/getAPI')
const {internalTransfer} = require('../controllers/internalTransfer/internalTransfer')


router.get('/api/bank/', getAPI)

router.post('/api/bank/internal-transfer', sendTransfer)

router.post('/api/bank/create-account', accountCreation)

router.post('/api/bank/account-details', accountDetails)

router.post('/api/bank/wallet-registration', createWallet)

router.post('/api/bank/internal-transfer', internalTransfer)


module.exports= router;

