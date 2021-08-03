import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";

export const Subtotal =
	() => {
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
										(0
										items):{" "}
										<strong>
											0
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
					value={0}
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
				<button>
					Proceed to
					checkout
				</button>
			</div>
		);
	};

export default Subtotal;
