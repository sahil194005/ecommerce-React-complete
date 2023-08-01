import React from "react";
import Sanji from "../../Assets/Animations/Sanji.gif";
import Sanji2 from '../../Assets/Animations/sanji2.gif'
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="">
			<div className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full justify-evenly  ">
				<div className=" md:px-6  mx-6 md:text-3xl">
					<Link to="/Home">HOME</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl ">
					<Link to="/">STORE</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl animate-bounce">
					<Link className="border-b-2 pb-1" to="/About">
						ABOUT
					</Link>
				</div>
			</div>

			<div className="hidden  sm:block   w-screen h-screen  p-6">
				<div className="  h-2/5 grid grid-cols-2">
					<div className="  bg-[rgb(248,192,187)]"></div>
          <div className=" bg-red-500 h-full w-full flex  items-end justify-center">
          <img className=" max-h-[300px]   object-cover " src={Sanji2} alt="" />
          </div>
				</div>
				<div className=" h-2/5 w-full  grid grid-cols-4 ">
					<div className="bg-[rgb(255,190,225)]">
						<div className=" flex justify-center items-center h-full w-full  ">
							<h1 className="-rotate-90 text-gray-700 font-mono text-7xl">
								About
							</h1>
						</div>
					</div>
					<div className="col-span-2">
						<div className="text-xl h-full w-full max-w-[60%] min-h-[80%] mx-auto my-auto flex justify-center items-center">
							Welcome to Store , where anime dreams come to
							life! Immerse yourself in a captivating world
							of anime wonder with our exquisite collection
							of posters. Each piece is a masterpiece,
							capturing the essence of legendary series like
							"Naruto," "One Piece," and "Baki."
						</div>
					</div>
					<div className="bg-[rgb(246,101,84)]"></div>
				</div>
				<div className=" h-1/5 grid grid-cols-2">
          <div className="h-full w-full ">
           
          </div>
					<div className="bg-[rgb(119,112,212)]"></div>
				</div>
			</div>

			<div
				style={{
					backgroundImage: `url(${Sanji})`,
					backgroundRepeat: `no-repeat`,
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}
				className="  h-screen sm:hidden bg-[rgb(45,64,81)] border border-white ">
				<div className="  h-full w-full flex flex-col justify-end items-center p-3">
					<h1 className="text-white font-bold font-serif text-4xl mt-2">
						About Us
					</h1>
					<p className="text-white text-3xl px-9 text-center p-4 font-thin  ">
						Welcome to Store , where anime dreams come to
						life! Immerse yourself in a captivating world of
						anime wonder with our exquisite collection of
						posters. Each piece is a masterpiece, capturing
						the essence of legendary series like "Naruto,"
						"One Piece," and "Baki." Experience the
						adrenaline-fueled battles, epic journeys, and
						intense martial arts with our thoughtfully
						curated posters.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
