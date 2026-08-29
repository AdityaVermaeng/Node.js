const express = require('express');
const app=express();





const apiKeyCheck= (req,res,next) =>{
	if(req.query.apikey!=="12345"){
		return res.send("Invalid Key!");

	}
	next();
}


app.get('/secure', apiKeyCheck,(req,res)=>{
	res.send("Welcome to secure routes")
})
.listen(3000,()=>{
	console.log("Server is running on port 3000");
})