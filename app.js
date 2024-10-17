var app = require('express')();
var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/data", routes);
app.get("/tt", (req, res) => {
    res.send("test");
});
app.listen(3000, () => {
    console.log("Server is up");
})