const express = require('express');
const app = express();
const {port} = require('./helpers/configuration');


const startServer = () => {
	app.listen(port, (err) => {
		console.log(`Mailer server started ${port}`);
	})
}

app.get('/register', (req, res) => {
	res.json({
		register: true,
		info: {
			id: 11233123,
			token: 'ad15G3wt1254GSG'
		}
	})
})

app.get('/login', (req, res) => {
	res.json({
		login: true,
		info: {
			id: 11233123,
			token: 'ad15G3wt1254GSG'
		}
	})
})

app.get('/comment', (req, res) => {
	res.json({
		comment: true,
		info: {
			id: 11233123,
			token: 'ad15G3wt1254GSG'
		}
	})
})

startServer()