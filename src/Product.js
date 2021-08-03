import React from "react";
import "./Product.css";

function Product({
	title,
	price,
	image,
	rating,
}) {
	return (
		<div className="product">
			<div className="product_info">
				<p>
					{title}
				</p>
				<p className="product_price">
					<small>
						$
					</small>
					<strong>
						{price}
					</strong>
				</p>
				<div className="product_rating">
					{Array(
						rating,
					)
						.fill(1)
						.map(
							() => (
								<p>
									&#x2B50;
								</p>
							),
						)}
				</div>
			</div>
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
				alt="product image"
			/>
			<button>
				Add to
				basket
			</button>
		</div>
	);
}

export default Product;
