const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;

const stripe = require('stripe')(STRIPE_SECRET_KEY)

const renderBuyPage = async(req,res)=>{

    try {
        
        res.render('buy', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         })

    } catch (error) {
        console.log(error.message);
    }

}



// adding paytag on individual pages

const renderBuyPage2 = async(req,res)=>{

    try {
        
        res.render('physics', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         })

    } catch (error) {
        console.log(error.message);
    }

}

const renderBuyPage3 = async(req,res)=>{

    try {
        
        res.render('chemistry', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         })

    } catch (error) {
        console.log(error.message);
    }

}

const renderBuyPage4 = async(req,res)=>{

    try {
        
        res.render('maths', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         })

    } catch (error) {
        console.log(error.message);
    }

}

const renderBuyPage5 = async(req,res)=>{

    try {
        
        res.render('biology', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         })

    } catch (error) {
        console.log(error.message);
    }

}

const payment = async(req,res)=>{

    try {

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Anshita Choubey',
        address: {
            line1: '115, Vikas Nagar',
            postal_code: '281001',
            city: 'Mathura',
            state: 'Uttar Pradesh',
            country: 'India',
        }
    })
    .then((customer) => {
 
        return stripe.charges.create({
            amount: req.body.amount,     // amount will be amount*100
            description: req.body.productName,
            currency: 'INR',
            customer: customer.id
        });
    })
    .then((charge) => {
        res.redirect("/success")
    })
    .catch((err) => {
        res.redirect("/failure")
    });


    } catch (error) {
        console.log(error.message);
    }

}


// Adding subject page

const physics = async(req,res)=>{

    try {
        
        res.render('physics', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         });

    } catch (error) {
        console.log(error.message);
    }

}

const chemistry = async(req,res)=>{

    try {
        
        res.render('chemistry', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         });

    } catch (error) {
        console.log(error.message);
    }
}

const maths = async(req,res)=>{

    try {
        
        res.render('maths', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         });

    } catch (error) {
        console.log(error.message);
    }
}

const biology = async(req,res)=>{

    try {
        
        res.render('biology', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount:1
         });

    } catch (error) {
        console.log(error.message);
    }
}

const success = async(req,res)=>{

    try {
        
        res.render('success');

    } catch (error) {
        console.log(error.message);
    }

}

const failure = async(req,res)=>{

    try {
        
        res.render('failure');

    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    renderBuyPage,
    renderBuyPage2,
    renderBuyPage3,
    renderBuyPage4,
    renderBuyPage5,
    payment,
    physics,
    chemistry,
    maths,
    biology,
    success,
    failure
}