import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Account() {
	
	function isLogged() {
		const isUserLogged = window.localStorage.getItem("userToken")
		if(!isUserLogged)
			window.location = "/signin"
	}

	useEffect(isLogged, [])

	return (
		<div className="d-flex justify-content-center">
			Account
		</div>
	)
}