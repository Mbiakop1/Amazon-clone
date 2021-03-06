import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

export const Subtotal =
	() => {
		const [
			{ basket },
			dispatch,
		] =
			useStateValue();

		const history =
			useHistory();

		return (
			<div className="subtotal">
				<CurrencyFormat
					renderText={(
						value,
					) => (
						<div>
							{
								<div className="price">
									<p>
										Subtotal
										(
										{
											basket?.length
										}{" "}
										items):
										<strong>
											{
												value
											}
										</strong>
									</p>
									<small className="subtotal_gift">
										<input type="checkbox" />
										This
										order
										contains
										a
										gift
									</small>
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
					onClick={(
						e,
					) =>
						history.push(
							"/payment",
						)
					}
				>
					Proceed to
					checkout
				</button>
			</div>
		);
	};

export default Subtotal;
