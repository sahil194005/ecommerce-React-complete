import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Cart from "../Cart/Cart";
import "./ReactModal.css";

const ModalPopup = ({ isCart, setIsCart }) => {
	return (
		<Modal
			open={isCart}
			onClose={() => setIsCart(false)}
			classNames={{
				overlayAnimationIn: "customEnterOverlayAnimation",
				overlayAnimationOut: "customLeaveOverlayAnimation",
				modalAnimationIn: "customEnterModalAnimation",
				modalAnimationOut: "customLeaveModalAnimation",
			}}
			animationDuration={800}
			center>
			
				<Cart isCart={isCart} setIsCart={setIsCart} />
			
		</Modal>
	);
};

export default ModalPopup;
