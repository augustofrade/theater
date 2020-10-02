import React from "react";

export default function FooterSocial(props) {
	
	return (
		<div className="footer-social-box">
			{props.icon}
			<span className="footer-social-text">{props.text}</span>
		</div>		
	)
}