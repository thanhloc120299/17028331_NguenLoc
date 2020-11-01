const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 4000;
const path = require('path');
const exphbs = require('express-handlebars');
import UserRouter from "./bao/bao.router";
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})
app.use('/', UserRouter)

app.use(express.static('static'))

app.set('views', path.join(__dirname, '/views/'))
app.engine('html', exphbs({extname: 'html', defaultLayout: 'index', layoutsDir: __dirname + '/views/'}))
app.set('view engine', 'html')

app.use(function (req, res) {
	const err = new Error('Not Found')
	err.status = 404
	res.json(err)
})


app.listen(port, () => {
    console.log('Server runing: ' + port);
})
