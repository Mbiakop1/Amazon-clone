import React from "react";
import "./Home.css";
import Product from "./Product";

export const Home =
	() => {
		return (
			<div className="home">
				<div className="home_container">
					<img
						className="home_image"
						src="https://www.shruticreationbiz.com/Images/amazon-banner.png"
						alt="Amazon banner"
					/>

					<div className="home_row">
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
					</div>
					<div className="home_row">
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
					</div>
					<div className="home_row">
						<Product
							id="12"
							title="this is the information"
							price={
								2323
							}
							image="https://images-na.ssl-images-amazon.com/images/I/91J9pb2yEyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
					</div>
				</div>
			</div>
		);
	};

export default Home;
