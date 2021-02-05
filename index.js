const express = require('express');
const bodyParser = require('body-parser');

//create express app

const app = express();


//setup the server port

const port = process.env.PORT || 5000;



// parse request data and content type application;
app.use(bodyParser.urlencoded({extended: false}));

// parse request data 
app.use(bodyParser.json())



//define root route

app.get('/', (req, res)=>{
    res.send('Hello World');
});

//import payment routes
const paymentRoutes = require('./src/routes/paymentroutes');
const { urlencoded } = require('body-parser');

//create employee route
app.use('/api/v1/payments', paymentRoutes);

// listen to the port

app.listen(port, ()=>{
    console.log(`Express server is running at port ${port}`)
});