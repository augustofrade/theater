import React, { useEffect, useState } from "react";
import { Redirect, Link, useRouteMatch, Switch, Route } from "react-router-dom";
import "./Account.css";
import AccountSettings from "./Account/AccountSettings";
import PasswordSettings from "./Account/PasswordSettings";
import PaymentSettings from "./Account/PaymentSettings";
import InvalidRoute from "./InvalidRoute";

export default function Account() {
	const [ userInfo, setUserInfo ] = useState({
		name: "Scoob Nogueira da Silvassauro",
		phone: "55+ (11) 91231-3975",
		gender: "male",
		email: "institucional.scoob@hotspotter.br",
		createdAt: "2020-09-29T19:13:06.281Z"
	});

	let { path, url } = useRouteMatch();
	
	function isLogged() {
		const isUserLogged = window.localStorage.getItem("userToken")
		if(!isUserLogged)
			window.location = "/signin"
	}

	useEffect(() => {
		window.scrollTo(0, 0);

	}, [])

	return (
		<div>
			<div className="user-pannel">
				<div className="user-tab-group">
					<ul>
						<li className="user-tab">
							<Link to={`${url}`}>Account</Link>
						</li>
						<li className="user-tab">
							<Link to={`${url}/password`}>Password</Link>
						</li>
						<li className="user-tab">
							<Link to={`${url}/payment`}>Payment</Link>
						</li>
					</ul>
				</div>
			</div>
			<Switch>
				<Route exact path={`${path}`}>
					<AccountSettings {...userInfo} />
				</Route>
				<Route exact path={`${path}/password`}>
					<PasswordSettings />
				</Route>
				<Route exact path={`${path}/payment`}>
					<PaymentSettings />
				</Route>
				<Route path="*">
					<InvalidRoute />
				</Route>
			</Switch>
		</div>
	)
}