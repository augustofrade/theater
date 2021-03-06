const mongoose = require("../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	telephone: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	payment: {
		type: Array,
		default: [
			{ name: "Default", method: "cash" }
		]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.pre("save", async function(next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
	next();
})

const User = mongoose.model("User", UserSchema);
module.exports = User;