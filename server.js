const express = require("express");

const app = express();

app.use (express.static("public"));

const formidable = require("express-formidable");
app.use(formidable());

//REQUEST
// app.get("/",function(req, res){//Handler function for app.get //Get request
//     res.send("Yeah, we are learning Node")
// }); 

// app.get("/Saturday",function(req, res){  // Get request
//     res.send("fish and chips on Saturday next week")

// });

app.post("/create-post", function(req,res){ //handler for create post
    console.log(req.fields);
    console.log("Hey, i just got a post request")
})

app.listen(3000,/* this 3000 is a port number*/function(){
console.log("Boo hoo were learning Node and we like it")
});