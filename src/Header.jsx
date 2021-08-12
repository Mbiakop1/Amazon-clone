import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export const Header =
	() => {
		const [
			{
				basket,
				user,
			},
			dispatch,
		] =
			useStateValue();

		const handleAuthentication =
			() => {
				auth.signOut();
			};
		return (
			<div className="header">
				<Link to="/">
					<img
						className="header_logo"
						src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
						alt="Amazon logo"
					/>
				</Link>
				<div className="header_search">
					<input
						className="header_searchInput"
						type="text"
					/>
					<SearchIcon className="header_searchIcon" />
				</div>
				<div className="header_nav">
					<Link
						to={
							!user &&
							"/login"
						}
					>
						<div
							onClick={
								handleAuthentication
							}
							className="header_option"
						>
							<span className="header_lineOne">
								Hello{" "}
								{user
									? user.email
									: "Guest"}
							</span>
							<span className="header_lineTwo">
								{user
									? "Sign Out"
									: "Sign In"}
							</span>
						</div>
					</Link>
					<div className="header_option">
						<span className="header_lineOne">
							Featuers
						</span>
						<span className="header_lineTwo">
							{" "}
							&
							Orders{" "}
						</span>
					</div>
					<div className="header_option">
						<span className="header_lineOne">
							Your
						</span>
						<span className="header_lineTwo">
							Prime
						</span>
					</div>
					<Link to="/checkout">
						<div className="header_optionBasket">
							<ShoppingBasket />
							<span className="header_lineTwo header_basketCount">
								{
									basket?.length
								}
							</span>
						</div>
					</Link>
				</div>
			</div>
		);
	};

export default Header;
