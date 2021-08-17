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
							title="YSSOA Gaming Office High Back Computer Leather Desk Mesh Ergonomic 180 Degrees Adjustable Swivel Task Chair with Headrest and Lumbar Support, Red"
							price={
								258.4
							}
							image="https://images-na.ssl-images-amazon.com/images/I/61O4ilN5v1S.__AC_SX300_SY300_QL70_FMwebp_.jpg"
							alt="product image"
							rating={
								4
							}
						/>
						<Product
							id="13"
							title=" Sceptre Curved 30' 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI DisplayPort Up to 85Hz MPRT 1ms FPS-RTS Build-in Speakers, Machine Black (C305W-2560UN)"
							price={
								350
							}
							image="https://m.media-amazon.com/images/I/71hlqZS61bL._AC_SL1401_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
					</div>
					<div className="home_row">
						<Product
							id="14"
							title="Fabric Upholstered Tatami Tufty Soft Bed Modern Check King Size Double Bed"
							price={
								788
							}
							image="https://sc04.alicdn.com/kf/Hca51a493fdb5435ab851691b97efc088b.jpg"
							alt="product image"
							rating={
								4
							}
						/>
						<Product
							id="17"
							title="
Samsung Galaxy A52 5G, Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black"
							price={
								653
							}
							image="https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg"
							alt="product image"
							rating={
								5
							}
						/>
						<Product
							id="12"
							title="Cybertruck is built with an exterior shell made for ultimate durability..."
							price={
								50000
							}
							image="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg"
							alt="product image"
							rating={
								5
							}
						/>
					</div>
					<div className="home_row">
						<Product
							id="15"
							title="Sony Playstation 5 PS5 Digital Edition Console - 4K-TV Gaming, Ultra-High Speed SSD, 8K Output, Wi-Fi 6 (IEEE 802.11ax), Bluetooth 5.0"
							price={
								1155
							}
							image="https://m.media-amazon.com/images/I/615mHfrTnzL._AC_SL1500_.jpg"
							alt="product image"
							rating={
								4
							}
						/>
					</div>
				</div>
			</div>
		);
	};

export default Home;
