import "./App.css";
import { Header } from "./Header";
import Home from "./Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Checkout from "./Checkout";
import { Login } from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
	const [
		{ user },
		dispatch,
	] =
		useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged(
			(
				authUser,
			) => {
				console.log(
					"the user is :>>>",
					authUser,
				);
				if (
					authUser
				) {
					// the user just logged in
					dispatch({
						type: "SET_USER",
						user: authUser,
					});
				} else {
					// the user is logged out
					dispatch({
						type: "SET_USER",
						user: null,
					});
				}
			},
		);
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
