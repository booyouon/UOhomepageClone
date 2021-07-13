//express configuration to run the page

const express = require('express');
const app = express();
const path = require('path');

//serves the app.css,index.js, UO font, and images files for the files located in the views directory
app.use(express.static(path.join(__dirname, 'public')));
//serves fontawesome 
app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'))


//ejs set up
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//pathways
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/women', (req, res) => {
    res.render('women');
})

//message to tell node which port to look at when uo.js is started
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})