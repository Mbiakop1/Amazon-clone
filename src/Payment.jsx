import "./Payment.css";
import React, {
	useEffect,
} from "react";
import { useStateValue } from "./StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";
import {
	Link,
	useHistory,
} from "react-router-dom";
import {
	CardElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

export const Payment =
	() => {
		const [
			{
				basket,
				user,
			},
			dispatch,
		] =
			useStateValue();

		const history =
			useHistory();

		// th state/////////////////////////////////////////////////////////
		const [
			error,
			setError,
		] =
			useState(
				null,
			);
		const [
			disabled,
			setDisabled,
		] =
			useState(
				true,
			);

		const [
			succeeded,
			setSucceeded,
		] =
			useState(
				false,
			);

		const [
			processing,
			setProcessing,
		] =
			useState("");

		const [
			clientSecret,
			setclientSecret,
		] =
			useState("");
		// th state/////////////////////////////////////////////////////////

		useEffect(() => {
			// generate the special stripe secret which allows us to charge the customer
			const getClientSecret =
				async () => {
					const response =
						await axios(
							{
								method:
									"post",

								// stripe expects the total in a currencies subcurrencie

								url: `/payments/create?total=${
									getBasketTotal(
										basket,
									) *
									100
								}`,
							},
						);

					setclientSecret(
						response
							.data
							.clientSecret,
					);
				};

			getClientSecret();
		}, [basket]);

		const stripe =
			useStripe();
		const elements =
			useElements();

		const handleSubmit =
			async (
				event,
			) => {
				event.preventDefault();
				setProcessing(
					true,
				);
				const payload =
					await stripe
						.confirmCardPayment(
							clientSecret,
							{
								payment_method:
									{
										card: elements.getElement(
											CardElement,
										),
									},
							},
						)
						.then(
							({
								paymentIntent,
							}) => {
								// paymentIntent == payment confirmation
								setSucceeded(
									true,
								);
								setError(
									null,
								);
								setProcessing(
									false,
								);

								history.replaceState(
									"/orders",
								);
							},
						);
			};

		const handleChange =
			(event) => {
				setDisabled(
					event.empty,
				);
				setError(
					event.error
						? event
								.error
								.message
						: "",
				);
			};
		return (
			<div className="payment">
				<div className="payment_container">
					<h1>
						Checkout
						({" "}
						<Link to="/checkout">
							{
								basket?.length
							}{" "}
							Items
						</Link>
						)
					</h1>
					<div className="payment_section">
						<div className="payment_title">
							<h3>
								Delivery
								Address
							</h3>
						</div>
						<div className="payment_address">
							<p>
								{
									user?.email
								}
							</p>
							<p>
								123
								React
								Lane
							</p>
							<p>
								Los
								Angeles,
								CA
							</p>
						</div>
					</div>

					<div className="payment_section">
						<div className="payment_title">
							<h3>
								Review
								items
								and
								delivery
							</h3>
						</div>
						<div className="payment_items">
							{/* products */}
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

					<div className="payment_section">
						<div className="payment_title">
							<h3>
								Payment
								Method
							</h3>
						</div>
						<div className="payment_details">
							<form
								onSubmit={
									handleSubmit
								}
							>
								{/* <CardElement
									onChange={
										handleChange
									}
								/> */}
								<div className="payment_priceContainer">
									<CurrencyFormat
										renderText={(
											value,
										) => (
											<div>
												{
													<div className="price">
														<h3>
															Order
															Total:{" "}
															{
																value
															}
														</h3>
													</div>
												}
											</div>
										)}
										decimalScale={
											2
										}
										value={getBasketTotal(
											basket,
										)}
										displayType={
											"text"
										}
										thousandSeparator={
											true
										}
										prefix={
											"$"
										}
									/>
									<button
										disabled={
											processing ||
											disabled ||
											succeeded
										}
									>
										<span>
											{processing ? (
												<p>
													Processing
												</p>
											) : (
												"Buy Now"
											)}
										</span>
									</button>
								</div>
								{error && (
									<div>
										{
											error
										}
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	};
