import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";

export const Checkout =
	() => {
		const [
			{
				basket,
				dispatch,
			},
		] =
			useStateValue();
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
						{basket.map(
							(
								item,
							) => (
								<CheckoutProduct
									id={
										item.id
									}
									title={
										item.title
									}
									image={
										item.image
									}
									price={
										item.price
									}
									rating={
										item.rating
									}
								/>
							),
						)}
					</div>
				</div>
				<div className="checkout_right">
					<Subtotal />
				</div>
			</div>
		);
	};

export default Checkout;
