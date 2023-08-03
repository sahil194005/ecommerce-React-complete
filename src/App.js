import "./App.css";
import React from "react";

import {
	Route,
	Routes,
} from "react-router-dom";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Store from "./components/Pages/Store";
import SingleProduct from "./components/Single Product/SingleProduct";
import ErrorPage from "./components/Pages/ErrorPage";



function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Store />}></Route>
			</Routes>
			<Routes>
				<Route path="/About" element={<About />}></Route>
			</Routes>
			<Routes>
				<Route path="/ContactUs" element={<ContactUs />}></Route>
			</Routes>
			<Routes>
				<Route path="/:product_id" element={<SingleProduct/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
