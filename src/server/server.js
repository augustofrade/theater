const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.send("opa")
})
require("./controllers/authController")(app);
require("./controllers/dataController")(app);

app.listen(PORT, e => console.log(`Server running on port ${PORT}`));