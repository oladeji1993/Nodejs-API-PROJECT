var dbConn = require('../../config/db.config');

var Payment = function(payment){
    this.request_amount = payment.request_amount;
    this.salary = payment.salary; 
}


//get all payments
Payment.getAllPayments = (result) =>{
    dbConn.query('SELECT * FROM infodatabase', (err, res)=>{
        if(err){
            console.log('Error while fetching payments')
            result(null, err)
        }else{
            console.log('Payments successfully fetched');
            result(null,res);
        }
    })
}


// get payment by id 

Payment.getPaymentByID = (id, result)=>{
    dbConn.query('SELECT * FROM infodatabase WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching payments by ID');
            result(null, err)
        }else{
            result(null, res);
        }
    })
}

// create new payment
Payment.createPayment = (paymentReqData, result)=>{
    dbConn.query('INSERT INTO infodatabase SET ?', paymentReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err)
        }else{
            console.log('data inserted successfully');
            result(null, res)
        }
    })
}

module.exports = Payment