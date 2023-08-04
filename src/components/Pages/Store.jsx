
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import ModalPopup from "../NPM Packages/ModalPopup";
import { CartContextProvider } from "../Context/CartContext";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
const Store = () => {
	const [isCart, setIsCart] = useState(false);
	return (
		<CartContextProvider className="App">
			{isCart && (
				<ModalPopup isCart={isCart} setIsCart={setIsCart} />
			)}
			<Navigation/>
			<Navbar />
			<Main />
			<Footer />
		</CartContextProvider> 
	);
};


export default Store;
