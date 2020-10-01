import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Account from "./routes/Account";
import Search from "./routes/Search";
import InvalidRoute from "./routes/InvalidRoute";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Footer from "./components/Footer";


function App() {

	return (
		<Router>
			<Nav />
			<div className="container" style={{marginTop: 100, marginBottom: 100, minHeight: "80vh"}}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/movies">
						<Movies />
					</Route>
					<Route exact path="/account">
						<Account />
					</Route>
					<Route exact path="/search">
						<Search />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/signin">
						<SignIn />
					</Route>
					<Route path="*">
						<InvalidRoute />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
