// create a middleware that only allow users above 18 years of the age to access the routes

const express = require('express');
const app = express();
app.listen(5000,()=>{
	console.log("server is running on port 5000");
});

const agecheck=(req,res,next)=>{
	if(req.query,age<18){
		res.send("You are not allowed to access this route");
	}
	else{
		next();
	}
}

app.get('/movie',agecheck, (req, res) => {
	res.send("Welcome to movie Page");
});

