const express = require ('express');
const router = express.Router();
const PaymentInfo = require('../controllers/paymentinfo');


//get all the payments

router.get('/', PaymentInfo.getPaymentInfo); 


// get employee by id

router.get('/:id', PaymentInfo.getPaymentID);


//create new payment
router.post('/', PaymentInfo.createNewPayment);

module.exports = router;