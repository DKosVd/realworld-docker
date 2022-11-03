const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const {connectDb} = require('./helpers/db.js');
const {port, db, authApiBaseUrl, mailerApiBaseUrl} = require('./helpers/configuration');

const postSchema = new mongoose.Schema({
  name: String
})

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
	app.listen(port, (err) => {
		console.log(`api server started ${port}`);
		console.log(`database api_db ${db}`)
	})
	
	const newPost = new Post({name: 'NewPost'});
	newPost.save( (err, saved) => {
		console.log(`Volumes saved ${saved}`)
	})
	
	Post.find(function(err, posts) {
	   if(err) return console.error(err)
	   console.log(posts);
	})
}

app.get('/register', (req, res) => {
	axios.get(mailerApiBaseUrl + '/register').then(resp => {
		res.json({
			data: resp.data
		})
	}).catch(err => console.log(err))
})

app.get('/test', (req, res) => {
	res.send('All working');
})

app.get('/getUser', (req, res) => {
	axios.get(authApiBaseUrl + '/currentUser').then(response => {
		res.json({
			data: response.data
		})
	})
})

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer);
