import React, { useReducer, useEffect } from "react";
import axios from "axios";
export const CartContext = React.createContext();





const Reducer = (state, action) => {
	switch (action.type) {

		case "TOGGLE_CART": {
			return { ...state, isCart: !state.isCart };
		}

		case "INC_CART_COUNT": {
			return {
				...state,
				TotalCartItems: state.TotalCartItems + action.quant,
			};
		}
		// let obj = {
		// 	img_id: Product.img_id,
		// 	anime: Product.anime,
		// 	price: Product.price,
		// 	quantity: quant,
		// 	ProductId: Product._id
		//   }
		case "ADD_2_CART": {
			const InCart = state.cartItems.find(
				(item) => item.img_id === action.obj.img_id
			);

			if (!InCart) {

				return {
					...state,
					cartItems: [...state.cartItems, action.obj],
					TotalCartAmount:
						state.TotalCartAmount + action.obj.price * action.obj.quantity,
				};
			} else {
				state.cartItems.forEach((item) => {
					if (item.ProductId === action.obj.ProductId) {
						item.quantity = item.quantity + action.obj.quantity;
					}
				});
				return {
					...state,
					TotalCartAmount:
						state.TotalCartAmount + action.obj.price * action.obj.quantity,
				};
			}
		}
		case "REMOVE_FROM_CART": {
			let newArr = state.cartItems.filter((item) => {
				return item.ProductId !== action.ProductId;
			});

			let tbd = state.cartItems.find(
				(item) => item.ProductId === action.ProductId
			);

			let newTotal = tbd.quantity * tbd.price;
			return {
				...state,
				cartItems: newArr,
				TotalCartAmount: state.TotalCartAmount - newTotal,
				TotalCartItems: state.TotalCartItems - tbd.quantity
			};

		}
		case "SET_INITIAL_CART_ITEMS": {
			console.log('get all cart items being called')
			return {
				...state,
				cartItems: action.cartItems,
				TotalCartItems: action.cartItems.reduce(
					(total, item) => total + item.quantity,
					0
				),
				TotalCartAmount: action.cartItems.reduce(
					(total, item) => total + item.price * item.quantity,
					0
				),
			};
		}
		default:
			return state;
	}
};



export const CartContextProvider = (props) => {
	let cartItems = [];
	const intitState = {
		TotalCartItems: 0,
		cartItems: cartItems,
		TotalCartAmount: 0,
		isCart: false,
	};

	useEffect(() => {
		async function GetCartItems() {
			try {
				const response = await axios.get(`https://ecommerce-backend-xe7w.onrender.com/cart/getAllCartItems`);
				const fetchedCartItems = response.data;
				intitState.cartItems = fetchedCartItems;
				Dispatch({ type: "SET_INITIAL_CART_ITEMS", cartItems: fetchedCartItems });
			} catch (error) {
				console.log(error);
			}
		}
		GetCartItems()
	}, [])

	const [state, Dispatch] = useReducer(Reducer, intitState);
	
	return (
		<CartContext.Provider value={{ state, Dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};
