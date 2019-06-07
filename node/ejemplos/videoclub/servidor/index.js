const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());

app.use('/', apiRouter);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})