require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

//Database connection

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to the database..."));

// middlewares

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        // maxAge: 1 * 60 * 1000,
    }
}));

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

// set template engine

app.set('view engine', 'ejs');

// router prefix

app.use("", require("./routes/router"));

app.listen(PORT, () => {
    console.log(`In Local Machine http://localhost:${PORT}`);
});