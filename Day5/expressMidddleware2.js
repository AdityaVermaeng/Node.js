const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};

reqFilter();
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", reqFilter, (req, res) => {
  res.send("Welcome to Users Page");
});
app
  .get("/about", (req, res) => {
    res.send("Welcome to About Page");
  })

  .listen(4000, () => {
    console.log("Server is running at port 4000");
  });
