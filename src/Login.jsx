import "./Login.css";
import React, {
	useState,
} from "react";
import { Link } from "react-router-dom";

export const Login =
	() => {
		const [
			email,
			setEmail,
		] =
			useState("");
		const [
			password,
			setpassword,
		] =
			useState("");

		const signIn = (
			e,
		) => {
			e.preventDefault();
			//    login with firebase
		};
		const register =
			(e) => {
				e.preventDefault();
				//    register with firebase
			};

		return (
			<div className="login">
				<Link to="/">
					<img
						className="login_logo"
						src="https://images.squarespace-cdn.com/content/v1/5af21b58297114cd4aa890e8/1525823742541-N2L4YG5CTOB4B3HWXK74/amazon-logo-black-transparent.png"
						alt="Amazon logo"
					/>
				</Link>
				<div className="login_container">
					<h1>
						Sign in
					</h1>
					<form>
						<h5>
							Email
						</h5>
						<input
							type="text"
							value={
								email
							}
							onChange={(
								e,
							) =>
								setEmail(
									e
										.target
										.value,
								)
							}
						/>

						<h5>
							Password
						</h5>
						<input
							type="password"
							value={
								password
							}
							onChange={(
								e,
							) =>
								setpassword(
									e
										.target
										.value,
								)
							}
						/>

						<button
							type="submit"
							onClick={
								signIn
							}
							className="login_signInButton"
						>
							Sign
							in
						</button>
					</form>

					<p>
						By
						signing
						in you
						agree to
						Amazon's
						Clone
						Conditions
						of Use &
						Sale.
						Please
						see our
						Privacy
						Notice,
						our
						Cookies
						Notices
						and our
						Iterest-Based
						Ads
						Notice.
					</p>

					<button
						onClick={
							register
						}
						className="login_registerButton"
					>
						Create
						your
						Amazon
						account
					</button>
				</div>
			</div>
		);
	};
