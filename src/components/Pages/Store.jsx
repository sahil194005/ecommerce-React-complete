
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import ModalPopup from "../NPM Packages/ModalPopup";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Header from '../Header/Header';
const Store = () => {
	const [isCart, setIsCart] = useState(false);
	return (
		<React.Fragment>

			<Navigation />
			<Header/>
			{isCart && (
				<ModalPopup isCart={isCart} setIsCart={setIsCart} />
			)}
			<Navbar />
			<Main />
			<Footer />
		</React.Fragment>

	);
};


export default Store;
