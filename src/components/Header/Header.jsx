import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import hero from "../../Assets/heroImage.webp";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Hero from "../../Assets/Animations/Hero.gif";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const Header = ({ isCart, setIsCart }) => {
	
	const { state } = useContext(CartContext);
	return (
		<React.Fragment>
			<Navigation/>

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

export default Header;
