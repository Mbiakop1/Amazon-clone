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
import { Payment } from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Footer } from "./Footer";

const promise =
	loadStripe(
		"pk_test_51IfE8aFap3r3HQRH9w6j8zk60A9Cjlj5mOsDG2pKhUYosmo8h0GXJmAE3hRDy1h4dj4rqoFbS8JTFYo4tDfWksun002pNTCoH0",
	);

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
					<Route path="/payment">
						<Header />
						<Elements
							stripe={
								promise
							}
						>
							<Payment />
						</Elements>
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
				<Footer />
			</div>
		</Router>
	);
}

export default App;
