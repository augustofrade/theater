import React from "react";

export default function ({For, title}) {
	
	return (
		<div className="form-group">
		    <label htmlFor={For}>{title}</label>
		    <select className="form-control user-input" id={For}>
		    	<option>Male</option>
		    	<option>Female</option>
		    	<option>Other</option>
		    </select>
		  </div>		
	)
}