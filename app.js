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
let review= require('./route/review');
let upload= require('./route/upload');

const isLoggedIn = (req, res, next) => {
  try {
    if (!req.cookies.token || req.cookies.token === "") {
      return res.redirect("/login");
    }
    const data = jwt.verify(req.cookies.token, process.env.JWT_TOKEN);
    req.user = data;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.redirect("/login");
  }
};




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

// app.use("/uploads", express.static("uploads"));

// app.use("/api/upload", uploadRoutes);
app.use('/auth',auth);

app.use('/review',review);
app.use('/new',upload)

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

app.get('/upload',isLoggedIn,(req, res) => {
    res.render('upload');
})





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

