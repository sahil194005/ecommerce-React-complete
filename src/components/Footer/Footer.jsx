import React from "react";
import footerImg from "../../Assets/footer1.jpeg";
const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${footerImg})`,
				// opacity:"0.7",
			}}
			className="w-full h-auto bg-cover bg-center mt-4 p-4 ">
			<div className="grid gap-7 grid-cols-2  text-white md:grid-cols-4 ">
				<div>
					<p className="font-bold text-2xl p-1">FIND US</p>
					<div className="text-gray-300">
						<p>
							Room NO C-201 Vindhyanchal Boys Hostel , NIT
							Hamirpur,Himachal Pradesh
						</p>
						<p>Hamirpur-177001</p>
						<p>Phone: +91 8219488620</p>
						<p>Email</p>
						<p>lyfesahil@gmail.com</p>
					</div>
				</div>
				<div>
					<p className="font-bold text-2xl p-1">
						CATEGORIES
					</p>
					<div className="text-gray-300">
						<p>Best Selling Products</p>
						<p>Epic Deals</p>
						<p>Wall Clocks</p>
						<p>Collectibles</p>
						<p>Posters</p>
						<p>Notebooks</p>
					</div>
				</div>
				<div>
					<p className="font-bold text-2xl p-1">HELP</p>
					<div className="text-gray-300">
						<p>Track your order</p>
						<p>My Account</p>
						<p>Contact Us</p>
						<p>Privacy policy</p>
						<p>Term & conditions</p>
						<p>FAQ</p>
					</div>
				</div>
				<div>
					<p className="font-bold text-2xl p-1">MORE</p>
					<div className="text-gray-300">
						<p>About Us</p>
						<p>Careers</p>
						<p>Schools & Colleges</p>
						<p>Bulk & Custom Orders</p>
						<p>Sell Your Artwork</p>
						<p>Privacy Policy</p>
						<p>Refund Policy</p>
						<p>Terms of Service</p>
						<p>Shipping Policy</p>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<h1 className="text-white font-bold text-2xl text-center tracking-widest">PRODUCTS MADE IN INDIA</h1>
			</div>
			<div></div>
		</div>
	);
};

export default Footer;
