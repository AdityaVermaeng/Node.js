//Allow only GET method and block all other methods

const express = require('express');
const app=express();

app.listen(3000,()=>{
	console.log("Server is running on port 3000");
})

const onlyGet=(req,res,next)=>{
	if(req.method!=="GET"){
		return res.send("Only GET method is allowed");

	}
	next();
}
app.use(onlyGet);