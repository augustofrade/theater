import React from "react";

export default function ({title, placeholder, type, name, For, maxLength}) {
	
	return (
		<div className="form-group">
		    <label htmlFor={For}>{title}</label>
		    <input type={type || "text"} className="form-control user-input" placeholder={placeholder}
		    name={name} aria-describedby={For} htmlFor={For} maxLength={maxLength} required />
		</div>
	)
}