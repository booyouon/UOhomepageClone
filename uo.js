
//change this value to choose which port to run on
const port = 3000;

//express configuration to run the page

const express = require('express');
const app = express();
const path = require('path');
const shopData = require('./data.json');

//mongoose
const mongoose = require('mongoose');
const Product= require('./models/product');

//method-override
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost:27017/uoCart', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open");
    })
    .catch(err => {
        console.log("mongo error");
        console.log(err);
    }) 

//serves the app.css,index.js, UO font, and images files for the files located in the views directory
app.use(express.static(path.join(__dirname, 'public')));

//serves fontawesome 
app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'))

//sets up urlencoded to read req.body
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//ejs set up
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//post requests
app.post('/cart' , async (req,res) => {
    const newProduct = await new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect('/cart');
})

app.get('/cart', async (req, res) => {
    const products = await Product.find({});
    res.render('cart', { products });
})

app.put('/cart/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/cart`);
})

app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect(`/cart`);
})

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

//message to tell node which port to look at when uo.js is started
app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})




