import React from "react";
import hero from "../../Assets/heroImage.webp";
import Hero from "../../Assets/Animations/Hero.gif";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<React.Fragment>
			<div className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full justify-evenly  ">
				<div className=" md:px-6  mx-6 md:text-3xl animate-bounce">
					<Link className="border-b-2 pb-1" to="/Home">HOME</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl ">
					<Link to="/">STORE</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl ">
					<Link  to="/About">
						ABOUT
					</Link>
				</div>
			</div>

			<div className="hidden sm:block w-full mt-[58px] h-[150px]  md:h-[350px] border ">
				<img
					className=" w-full h-full object-cover "
					src={hero}
					alt="hero"
				/>
			</div>
			<div className="sm:hidden">
				<img className="ml-[70px]" src={Hero} alt="hero" />
			</div>
		</React.Fragment>
	);
};

export default Home;
