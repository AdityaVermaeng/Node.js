const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send("<h2>This is home page</h2><a href='/about'>About</a><br><a href='/contact'>Contact</a>");
});
app.get('/about', (req, res) => {
	res.send("<h2>This is about page</h2><a href='/'>Home</a><br><a href='/contact'>Contact</a><br><a href='/help'>Help</a>");
});
app.get('/contact', (req, res) => {
	res.send("<h2>This is contact page</h2><a href='/'>Home</a><br><a href='/about'>About</a>");
});
app.get("/help", (req, res) => {
	res.send(`<input type="text" placeholder="Enter your name" id="name" value="${req.query.name}"/>
		<button>Submit</button>
		<a href="/">Home</a><br><a href="/about">About</a><br><a href="/contact">Contact</a>`);
}).listen(5000, () => {
	console.log("Server is running on port 5000");
});
