const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authConfig = require("../config/auth");

function generateToken(params = {}) {
	return jwt.sign(params, authConfig.secret, {
		expiresIn: 86400
	})
}

router.post("/signup", async (req, res) => {
	const {email} = req.body
	
	try {
		if(await User.findOne({ email }))
			return res.status(400).send({ error: "User already exists"})
		const user = await User.create(req.body);
		user.password = undefined;
		res.send({user})
	} catch (e) {
		res.status(400).send({ error: "An error ocurred"})
	}
})

router.post("/signin", async (req, res) => {
	const { password, email } = req.body;
	const user = await User.findOne({ email }).select("+password");
	if(!user)
		return res.status(404).send({error: "User not found"});
	if(!await bcrypt.compare(password, user.password))
		return res.status(401).send({error: "Invalid Password"});
	user.password = undefined;
	res.status(202).send({
		user, token: generateToken({id: user.id})
	});
})

router.patch("/editaccount", async (req, res) => {
	try {
		if(!await User.findOne({email: req.body.email}))
			return res.status(400).send({error: "Something happened"})
		
		await User.updateOne({email: req.body.email}, req.body.new_info)
		res.status(202).send({alert: "Nice"})
	} catch {
		res.status(400).send({error: "Something happened"})
	}
})

module.exports = app => app.use("/auth", router);