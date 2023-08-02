import "./App.css";
import React from "react";

import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Store from "./components/Pages/Store";
import SingleProduct from "./components/Single Product/SingleProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Store />,
	},
	{
		path: "/About",
		element: <About />,
	},
	{
		path: "/ContactUs",
		element: <ContactUs />,
	},
	{
		path: "/:product_id",
		element: <SingleProduct />,
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
