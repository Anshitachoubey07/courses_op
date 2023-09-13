const express = require('express');
const payment_route = express();

const bodyParser = require('body-parser');

payment_route.use(express.static("public"))
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

payment_route.set('view engine','ejs');
payment_route.set('views',path.join(__dirname, '../views'));

// payment_route.get("/", function(req, res){
//     res.sendFile(__dirname + "/buy.html");
// });

const paymentController = require('../controllers/paymentController');

payment_route.get('/', paymentController.renderBuyPage);
payment_route.post('/payment', paymentController.payment);
payment_route.get('/physics', paymentController.physics);
payment_route.get('/chemistry', paymentController.chemistry);
payment_route.get('/maths', paymentController.maths);
payment_route.get('/biology', paymentController.biology);
payment_route.get('/success', paymentController.success);
payment_route.get('/failure', paymentController.failure);

module.exports = payment_route;