import React, { ReactDOM } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Cart from "../Cart/Cart";

const ModalPopup = ({ isCart, setIsCart }) => {
	return (
		<Modal
			open={isCart}
			onClose={() => setIsCart(false)}
			center>
			<div className="">
				<Cart setIsCart={setIsCart} />
			</div>
		</Modal>
	);
};

export default ModalPopup;
