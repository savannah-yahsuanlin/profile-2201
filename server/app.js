const path = require('path')
const express = require('express')
const morgan = require('morgan')
const https = require('https')
const fs = require('fs')
const app = express()
module.exports = app

app.use(morgan('dev'))

app.use(express.json())

app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

app.use(express.static(path.join(__dirname, '..', 'public')))

const key = fs.readFileSync('./certs/localhost:8080.key');

const cert = fs.readFileSync('./certs/localhost:8080.crt');

const server = https.createServer({key: key, cert: cert }, app);

app.use((req, res, next) => {
  if (path.extname(req.path).length || !req.secure) {
    const err = new Error('Not found')
    err.status = 404
    
    next(err)
    return res.redirect('https://' + req.headers.host + req.url);
  } else {
    next()
  }
})


app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})


app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
