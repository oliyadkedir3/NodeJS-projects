const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// passport config
require('./config/passport')(passport);

// DB Config 
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: false}).then(() => console.log('MongoDb Connected')).catch(err => console.log(err));


// EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
// Bodyparser
app.use(express.urlencoded({ extended:false }));
// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
// passport middleware
// app.use(passport.);
// app.use(passport.session());

// Connect Flash
app.use(flash());
// Global Vars
app.use((req,res,next)=>{
  res.locals.success_msg = req,flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));