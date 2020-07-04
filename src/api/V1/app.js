const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoute = require('./router/users.route')
const orderRoute = require('./router/rate.route')

const app = express ()

mongoose.connect('SECRET_MONGO_URI',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth',userRoute)
app.use('/api/order', orderRoute)

module.exports = app
