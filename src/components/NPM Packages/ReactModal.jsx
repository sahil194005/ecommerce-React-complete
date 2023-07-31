import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Cart from "../Cart/Cart";
import './ReactModal.css'



const ModalPopup = ({ isCart, setIsCart }) => {


	return (
		<Modal
			open={isCart}
			onClose={() => setIsCart(false)}
			classNames={{
				overlayAnimationIn: 'customEnterOverlayAnimation',
				overlayAnimationOut: 'customLeaveOverlayAnimation',
				modalAnimationIn: 'customEnterModalAnimation',
				modalAnimationOut: 'customLeaveModalAnimation',
			  }}
			  animationDuration={800}
			center>
			<div className=" text-4xl "></div>
			<Cart/>
		</Modal>
	);
};

export default ModalPopup;
