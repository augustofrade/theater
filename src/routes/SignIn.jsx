import React, { useState } from "react";
import UserInfoInput from "../components/UserInfoInput";
import UserInfoPwd from "../components/UserInfoPwd";

export default function SignIn() {
	const [ password, setPassword ] = useState("");
	const [ pwdBorder, setPwdBorder ] = useState("auto");

	function handleForm(e) {
		if(password == "") {
			e.preventDefault();
			setPwdBorder("#fe4a49");
		} else
			setPwdBorder("#ccc");
	}

	return (
		<div style={{background: "#eee", padding: 30, paddingBottom: 60, borderRadius: 6}}>
			<h2 className="display-3" style={{paddingTop: 30, marginBottom: 40}}>Login</h2>
			<p className="lead">Enjoy the best movies with comfort in the best theaters out there</p>
			<hr />
			<form method="POST" action="/auth/sigin">
				<UserInfoInput title="E-mail" placeholder="email@domain.com" name="email" For="email" type="email" maxLength="40" />
				<UserInfoPwd onChange={e => setPassword(e.target.value.trim())} borderColor={pwdBorder} />
				<br />
				<button type="submit" className="btn btn-info btn-lg btn-block" onClick={handleForm}>Sign in</button>
			</form>
			<p className="blockquote text-right" style={{marginTop: 10}}>Don't have an account? <a href="/signup">Sign up</a>!</p>
		</div>
	)
}