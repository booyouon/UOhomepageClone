
//express configuration to run the page

const express = require('express');
const app = express();
const path = require('path');
const shopData = require('./data.json');


//serves the app.css,index.js, UO font, and images files for the files located in the views directory
app.use(express.static(path.join(__dirname, 'public')));

//serves fontawesome 
app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'))

//sets up urlencoded to read req.body
app.use(express.urlencoded({extended:true}));

//ejs set up
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//pathways .get
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/women', (req, res) => {
    res.render('women');
})
app.get('/men', (req, res) => {
    res.render('men');
})
app.get('/beauty', (req, res) => {
    res.render('beauty');
})
app.get('/cart', (req, res) => {
    res.render('cart');
})
app.get('/sale', (req, res) => {
    res.render('sale');
})
app.get('/rewards', (req, res) => {
    res.render('rewards');
})
app.get('/shipping', (req, res) => {
    res.render('shipping');
})
app.get('/accessibility', (req, res) => {
    res.render('accessibility');
})
app.get('/bdg', (req, res) => {
    res.render('bdg');
})
app.get('/afterPay', (req, res) => {
    res.render('afterPay');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/faq', (req, res) => {
    res.render('faq');
})
app.get('/giftCard', (req, res) => {
    res.render('giftCard');
})
app.get('/orderPayment', (req, res) => {
    res.render('orderPayment');
})
app.get('/privacy', (req, res) => {
    res.render('privacy');
})
app.get('/returnExchanges', (req, res) => {
    res.render('returnExchanges');
})
app.get('/terms', (req, res) => {
    res.render('terms');
})
app.get('/UOMRKT', (req, res) => {
    res.render('UOMRKT');
})
app.get('/:product', (req, res) => {
    const { product } = req.params;
    const data = shopData[product];
    res.render('product', { ...data });
})

//post requests
app.post('/cart' ,(req,res) => {
    console.log(req.body);
})

//message to tell node which port to look at when uo.js is started
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})




