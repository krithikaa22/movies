const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const connectdb = require('./connection')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)

connectdb()

app.listen(3000, () => {
    console.log(`running on http://localhost:3000`)
})