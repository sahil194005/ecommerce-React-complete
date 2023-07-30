import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import hero from "../../Assets/heroImage.webp";
const Header = (props) => {
	return (
		<React.Fragment>
			<div>
				<div className=" bg-black text-white flex  py-4 fixed top-0 w-full md:justify-center  ">
					<div className=" md:px-6  mx-6 md:text-3xl">
						<button>HOME</button>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl">
						<button>STORE</button>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl">
						<button>ABOUT</button>
					</div>
					<div className="fixed right-4 px-2 top-0  ">
						<button>
							<CiShoppingCart className="text-6xl " />
						</button>
					</div>
					<div className="fixed right-10 cursor-pointer ">
						<span>10</span>
					</div>
				</div>
			</div>

			<div className=" bg-blue-800 w-full mt-[60px] h-[150px]  md:h-[350px]">
				<img
					className=" w-full h-full object-cover"
					src={hero}
					alt="hero"
				/>
			</div>
		</React.Fragment>
	);
};

export default Header;
