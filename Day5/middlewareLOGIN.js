const express=require('express');
const app=express();

app.listen(3000,()=>{
	console.log("Server is running on port 3000");
})

const checkLogIn=(req,res,next)=>{
	if(req.query.login!=="true"){
		// console.log("User is not logged in");
		return res.send("Please log in to access this route");
	}else{
		next();
	}
}
app.use(checkLogIn);

app.get('/',(req,res)=>{
	res.send("Welcome to Home Page");
});