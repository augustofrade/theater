import React, { useState } from "react";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import UserInfoInput from "../components/UserInfoInput";
import UserInfoPwd from "../components/UserInfoPwd";
import UserInfoSelect from "../components/UserInfoSelect";
// import "../components/UserInputs.css";

export default function SignUp() {
	const [ passwords, setPasswords ] = useState({pwd: "", confirm: ""})
	const [ pwdBorder, setPwdBorder ] = useState("auto")

	function validatePassword(e) {
		if(passwords.pwd !== passwords.confirm || passwords.pwd === "" || passwords.confirm === "") {
			e.preventDefault();
			setPwdBorder("#fe4a49");
		} else {
			setPwdBorder("#ccc");
		}
	}

	const setPassword = e => setPasswords({...passwords, pwd: e.target.value.trim()})
	const setConfirmationPwd = e => setPasswords({...passwords, confirm: e.target.value.trim()})

	return (
		<div>
			<h2>Sign up</h2>
			<hr />
			<form method="GET" action="/aeawe">
				<UserInfoInput title="Full name" placeholder="Name" name="name" For="name" maxLength="50" />
				<UserInfoInput title="E-mail" placeholder="email@example.com" name="email" type="email" For="email" maxLength="40" />
				
				<div className="row">
					<div className="col"><UserInfoPwd borderColor={pwdBorder} onChange={setPassword} /></div>
					<div className="col"><UserInfoPwd title="Confirm password" borderColor={pwdBorder} onChange={setConfirmationPwd} /></div>
				</div>
				<div className="row">
					<div className="col">
						<UserInfoInput title="Telephone" placeholder="Telephone" name="telephone" For="telephone" />
					</div>
					<div className="col">
						<UserInfoInput title="Country" placeholder="Country" name="country" For="country" />
					</div>
				</div>

				<UserInfoSelect For="gender" title="Gender" />

				<button type="submit" className="btn btn-primary btn-lg btn-block" onClick={validatePassword}><CheckRoundedIcon /> Sign up</button>
			</form>
			<div className="text-muted text-right" style={{marginTop: 10}}>
				By creating an account you accept our <a href="/">Terms of Use</a> and <a href="/">User Data Licensing</a>
			</div>
		</div>
	)
}