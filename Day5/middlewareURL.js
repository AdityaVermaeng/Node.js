// Create a midlleware that prints the request URL in the console

const express = require('express');
const app = express();

app.listen(3000, () => {
		console.log("Server is running on port 3000");
}	)

const printUrl = (req, res, next) => {
	console.log("Request URL:", req.originalUrl);
	next();
}

app.use(printUrl);

app.get('/home', (req, res) => {
	res.send("Welcome to Home Page");
});

app.get('/about',(req,res)=>{
	res.send("welcome to about page")
})