import React from "react";

const ImgCard = (props) => {
	return (
		<div className="flex flex-col justify-between border border-gray-300 max-w-[300px] max-h-[500px] shadow-lg ">
			<div className="flex justify-between   pb-3 ">
				<div className="bg-red-700 text-white px-2">
					SALE
				</div>
				<div className="text-2xl text-blue-700">
					<AiOutlineHeart />
				</div>
			</div>

			<div className="h-52 px-4 hover:scale-105 duration-300">
				<img
					src={props.img}
					alt=""
					className="w-full h-full object-cover  "
				/>
			</div>
			<div className="px-4 py-1">
				<p className="font-medium">{props.description}</p>
				<p className="text-gray-500">
					On sale from {props.price}
				</p>
				<button className="border bg-red-700 text-white p-1 rounded-md">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ImgCard;
