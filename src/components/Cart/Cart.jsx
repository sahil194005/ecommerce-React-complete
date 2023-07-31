import React from "react";
import SingleCartItem from "./SingleCartItem";

const cartItems = [
	{
		img_id: 1,
		anime: "Naruto",
		description: "Almighty Push Wall Poster",
		price: 350,
		quantity: 4,
	},
	{
		img_id: 2,
		description: "Roronoa Zoro Wall Poster",
		anime: "One Piece",
		price: 400,
		quantity: 2,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
		quantity: 1,
	},
];
const Cart = (props) => {
	let Items = cartItems.map((item) => {
		return (
			<SingleCartItem
				key={item.img_id}
				img_id={item.img_id}
				anime={item.anime}
				price={item.price}
				quantity={item.quantity}
			/>
		);
	});
	return (
		<div className="">
			{Items}
			<div className="flex bg-white justify-between mt-5 border border-black p-2  ">
				<div className="text-center ">
					<button className="text-xl">1,877</button>
					<p>view price details</p>
				</div>
				<div onClick={()=>props.setIsCart(false)} className="bg-yellow-400 rounded-md px-1 justify-center items-center flex">
					<button>Close Cart</button>
				</div>
				<div className="bg-yellow-400 rounded-md px-1 justify-center items-center flex">
					<button>Place Order</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
