const PaymentModel = require('../models/payment.model');
// const Payment = require('../models/payment.model');

// get payment info
exports.getPaymentInfo = (req, res)=>{
    // console.log('Here are my available payments info')
    PaymentModel.getAllPayments((err, Payment)=>{
        console.log('Its working');
        if(err)
        res.send(err);
        console.log('Payments', Payment);
        res.send(Payment); 
    })
}



// get employee by ID

exports.getPaymentID = (req, res)=>{
    // console.log("Get payments by Id")
    PaymentModel.getPaymentByID((req.params.id, (err, Payment)=>{
        if(err)
        res.send(err);
        console.log('single employee data')
        res.send(Payment);
    }))
}

//create new employee
exports.createNewPayment = (req, res)=>{
    console.log('req data', req.body);
    const paymentReqData = new PaymentModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all the fields'});
    }else{
        console.log('valid data');
        PaymentModel.createPayment(paymentReqData, (err, payment)=>{
            if(err)
            res.send(err);
            res.json({status: true, message:'payment created successfully', data: payment})
        })
    }
}