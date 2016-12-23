var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.render("index.html");
});

app.set('port', process.env.PORT || 8080);

// views for rendering
app.set("view engine", "ejs");
app.engine("html", require('ejs').renderFile);

app.set("views", __dirname);
app.use("/js", express.static(__dirname+"/js"));
app.use("/css", express.static(__dirname+"/css"));
app.use("/images", express.static(__dirname+"/images"));
app.use("/views", express.static(__dirname+"/views"));



app.use(function(req,res){
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not found");
});

app.use(function(req,res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - server error");
});


app.listen(app.get('port'), function() {
 console.log('Express Server is running at localhost:' + app.get('port'));
});