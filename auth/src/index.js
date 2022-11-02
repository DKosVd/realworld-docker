const express = require('express');
const app = express();
const { connectDb } = require('./helpers/db.js')
const {port, db} = require('./helpers/configuration');


const startServer = () => {
	app.listen(port, (err) => {
		console.log(`Auth server started ${port}`);
		console.log(`database api_db ${db}`)
	})
}

app.get('/test', (req, res) => {
	res.send('All working');
})

app.get('/currentUser', (req, res) => {
	res.json({
		user: '1234',
		email: 'email@email.email'
	})
})

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer);
