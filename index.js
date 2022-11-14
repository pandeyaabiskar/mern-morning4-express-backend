const express = require('express');
const PORT = 4000;
const productRouter = require('./routes/productRoutes');
const hbs = require('hbs');
const productData = require('./data/products.json')
const { logData } = require('./middlewares/logger')
require('dotenv').config();
const connectDatabase = require('./database/connection')

//Creating a server
const app = express();
//Connect Database
connectDatabase();

//Setting view engine
app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials')

//Serving static file
app.use(express.static('./public'))
app.use(express.json())
//Custom middleware
// app.use(logData);
// app.use('/api/products', logData);

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to Ecommerce API")
})
//SSR Routes
app.get('/products', (req, res) => {
    res.render('index', { title : "Online Store", productData});
})

app.use('/api/products', productRouter);

//Error route handling
app.get('*', (req, res) => {
    res.status(404).send("Sorry, Page Not Found!")
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})