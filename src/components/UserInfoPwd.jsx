import React, { useState } from "react";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

export default function UserInfoPwd({ title, borderColor, onChange}) {
	const [inputType, setInputType] = useState("password")

	function togglePwdVisibility(e) {
		e.preventDefault()
		setInputType(inputType === "password" ? "text" : "password")
	}

	let button;
	if(inputType === "password")
		button = <VisibilityOffOutlinedIcon />
	else
		button = <VisibilityOutlinedIcon />

	return (
		<div className="form-group">
		    <label htmlFor="exampleInputEmail1">{title || "Password"}</label>
		    <span className="form-control user-input" style={{display: "flex", justifyContent: "space-between", borderColor }}>
			    <input type={inputType} className="" placeholder="Password" name="password" onChange={onChange}
			    	aria-describedby="emailHelp" style={{border: "none", display: "inline", width: "90%"}} maxLength="15"
			    />
				<span onClick={togglePwdVisibility} style={{cursor: "pointer"}}>
					{button}
			    </span>
		    </span>
		</div>
	)
}