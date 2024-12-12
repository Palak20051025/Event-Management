let express= require('express');
let mongoose= require('mongoose');
const path = require('path');
let dotenv = require('dotenv');
let session= require('express-session');
let passport= require('passport');
let cors= require('cors');
let bcrypt= require('bcrypt');
let jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
let connectdb=require('./config/db');
let auth=require('./route/auth');




dotenv.config();
connectdb();

PORT=3000;


let app = express();




app.use(cors());  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,   
  resave: false,             
  saveUninitialized: false,  
}));


app.use(cookieParser());


app.use(cors());  

app.use('/auth',auth);

app.get('/',(req, res) => {
    res.render('index');
})

app.get('/login',(req, res) => {
    res.render('login');
})

app.get('/sign',(req, res) => {
    res.render('signup');
})

app.get('/team',(req, res) => {
    res.render('team');
})

app.get('/contact',(req, res) => {
    res.render('contact');
})

app.get('/review',(req, res) => {
    res.render('review');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });