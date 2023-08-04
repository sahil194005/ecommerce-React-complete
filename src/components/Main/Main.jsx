import React from "react";
import ImgCard from "./ImgCard";
import Loading from "../UI/Loading";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Main = () => {
	const { state } = useContext(CartContext);

	if (state.StoreItems.length === 0)
		return <Loading />

	return (
		<div className="   grid  gap-7 justify-items-center    pt-10   md:grid-cols-3 px-2 max-w-[1300px] mx-auto">
			{state.StoreItems.map((item) => {
				return (
					<ImgCard
						key={item._id}
						id={item._id}
						img_id={item.img_id}
						anime={item.anime}
						description={item.description}
						price={item.price}
					/>
				);
			})}
		</div>
	);

};

export default Main;


