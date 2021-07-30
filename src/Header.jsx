import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";

export const Header =
	() => {
		return (
			<div className="header">
				<img
					className="header_logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
					alt="Amazon logo"
				/>
				<div className="header_search">
					<input
						className="header_searchInput"
						type="text"
					/>
					<SearchIcon className="header_searchIcon" />
				</div>
				<div className="header_nav">
					<div className="header_option">
						<span className="header_lineOne">
							Hello
							guest
						</span>
						<span className="header_lineTwo">
							Sign
							in
						</span>
					</div>
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
					<div className="header_optionBasket">
						<ShoppingBasket />
						<span className="header_lineTwo header_basketCount">
							0
						</span>
					</div>
				</div>
			</div>
		);
	};

export default Header;
