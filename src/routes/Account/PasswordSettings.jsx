import React, { useState } from "react";
import UserInfoPwd from "../../components/UserInfoPwd";

export default function PasswordSettings() {
	const [ passwords, setPasswords ] = useState({oldPwd: "", newPwd: ""});
	const [ borderColor, setBorderColor ] = useState("auto");
	
	const setOldPwd = e => setPasswords({...passwords, oldPwd: e.target.value.trim()})
	const setNewPwd = e => setPasswords({...passwords, newPwd: e.target.value.trim()})

	return (
			<form method="POST">
			<h3>Reset Password</h3>
				<UserInfoPwd title="Current password" onChange={setOldPwd} />
				<UserInfoPwd title="New password" placeholder="New password" borderColor={borderColor} onChange={setNewPwd} />
				<button className="btn btn-primary" onClick={() => alert("nothing.")}>Set new password</button>
			</form>
	)
}