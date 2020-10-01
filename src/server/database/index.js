const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/theater-api", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).then(() => console.log("DataBase connected")).catch(e => console.log(e))
mongoose.Promise = global.Promise;

module.exports = mongoose;