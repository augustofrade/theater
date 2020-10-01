import React from "react";

export default function Footer() {
	
	return (
		<footer style={{background: "#ccc", padding: 40, textAlign: "justify"}}>
			<h3>About</h3>
			<p className="lead"><b>Maxim Movie Theater</b> is a to-be fully-functional movie theater application made with React</p>
			<p className="lead">Author: <a href="https:/github.com/augustofrade">Augusto Frade</a></p>
		</footer>
	)
}