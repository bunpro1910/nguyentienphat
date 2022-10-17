const express =require('express');
const app = express();
const url  =require('url');

const path = require('path')
const bodyParser =require('body-parser')
const  cookieParser =require("cookie-parser");
const sessions =require("cookie-session")
const cors =require("cors")
const request = require("request");
const port = process.env.PORT || 3000;
const fileUpload =require('express-fileupload')
const ejs =require('ejs') 
const { dirname } =require('path')
const { fileURLToPath } =require('url')
const morgan =require('morgan')
const axios = require("axios");
app.engine('html', ejs.renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static((__dirname+ '/public')))
app.use(fileUpload({useTempFiles: true}))

// const Connection =require('pg');
// var connection = Connection.Pool


app.use(cors())
app.use(morgan('dev'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// const myconect = new connection({
//     user: 'cluxnqxatrrmlw',
//     host: 'ec2-3-224-8-189.compute-1.amazonaws.com',
//     database: 'dbudrej82007q5',
//     password: 'd76d4e9aca68d97bdb44613fa14fd62429a95c1030a55fc71f0d7655ef68118f',
//     port: 5432,
//     ssl: {rejectUnauthorized: false},
//     });



app.get('/',(req,res)=>{
     res.render(path.join(__dirname,"index.html"),{})
})
app.get('/index.html',(req,res)=>{
    res.render(path.join(__dirname,"index.html"),{})
})
app.get('/shop.html',(req,res)=>{
    res.render(path.join(__dirname,"shop.html"),{})
})
app.get('/about.html',(req,res)=>{
    res.render(path.join(__dirname,"about.html"),{})
})
app.get('/blog.html',(req,res)=>{
    res.render(path.join(__dirname,"blog.html"),{})
})
app.get('/contact.html',(req,res)=>{
    res.render(path.join(__dirname,"contact.html"),{})
})
app.get('/checkout.html',(req,res)=>{
    res.render(path.join(__dirname,"checkout.html"),{})
})
// app.get('/cart.html',(req,res)=>{
//     res.render(path.join(__dirname,"cart.html"),{})
// })
app.get('/services.html',(req,res)=>{
    res.render(path.join(__dirname,"services.html"),{})
})
app.get('/thankyou.html',(req,res)=>{
    res.render(path.join(__dirname,"thankyou.html"),{})
})
app.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`);
});

          
    