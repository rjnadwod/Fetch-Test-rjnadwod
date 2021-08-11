const express = require('express')
const bodyParser = require('body-parser')
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express()
const port = 3000
const db = require('./queries')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.render('index', { title: 'Fetch Back-End Test' })
})

app.get('/transactions', db.getTransactions)
app.get('/transactions/payers', db.getPayerBalances)
app.post('/add_transaction', db.addTransaction)
app.get('/transactions/date', db.getTransactionsByDate)
app.put('/spendpoints', db.spendPoints)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})