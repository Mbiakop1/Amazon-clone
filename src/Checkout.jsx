import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";

export const Checkout =
	() => {
		return (
			<div className="checkout">
				<div className="checkout_left">
					<img
						className="checkout_ad"
						src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
						alt="banner"
					/>
					<div className="div">
						<h2 className="checkout_title">
							{" "}
							Your
							shopping
							basket
						</h2>
						{/* checkout items */}
						{/* checkout items */}
						{/* checkout items */}
						{/* checkout items */}
					</div>
				</div>
				<div className="checkout_right">
					<Subtotal />
				</div>
			</div>
		);
	};

export default Checkout;
