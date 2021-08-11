import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

export const Login =
	() => {
		return (
			<div className="login">
				<Link to="/">
					<img
						className="login_logo"
						src="https://images.squarespace-cdn.com/content/v1/5af21b58297114cd4aa890e8/1525823742541-N2L4YG5CTOB4B3HWXK74/amazon-logo-black-transparent.png"
						alt="Amazon logo"
					/>
				</Link>
			</div>
		);
	};
