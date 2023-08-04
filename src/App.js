import "./App.css";
import React from "react";

import { Route, Routes, Switch } from "react-router-dom";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Store from "./components/Pages/Store";
import SingleProduct from "./components/Single Product/SingleProduct";
import ErrorPage from "./components/Pages/ErrorPage";
import { CartContextProvider } from "./components/Context/CartContext";
function App() {
	return (
		<div>
			<CartContextProvider>
				
					<Routes>
						<Route path="/" element={<Store />} ></Route>

						<Route
							path="/About"
							element={<About />}></Route>

						<Route
							path="/ContactUs"
							element={<ContactUs />}></Route>

						<Route
							path="/:product_id"
							element={<SingleProduct />}></Route>
					</Routes>

			</CartContextProvider>
		</div>
	);
}

export default App;
