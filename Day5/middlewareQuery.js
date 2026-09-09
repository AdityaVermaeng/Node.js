const express = require('express');
const app = express();

app.listen(4000,()=>{
	console.log("server is running on port 4000");
})

const  countryCheck=(req,res,next)=>{
	if(req.query.country!=="india"){
		res.send("You are not allowed to access this route");
	}else{
		next();
	}
}
app.use(countryCheck);

app.get('/india',  (req, res) => {
	res.send("Welcome to Indian user");

})