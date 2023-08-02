import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";
import img6 from "../../Assets/img6.png";
import { Link } from 'react-router-dom';
const imgMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
};

const imgArr = [
  {
    img_id: 1,
    anime: "Naruto",
    description: "Almighty Push Wall Poster",
    price: 350,

  },
  {
    img_id: 2,
    description: "Roronoa Zoro Wall Poster",
    anime: "One Piece",
    price: 400,


  },
  {
    img_id: 3,
    anime: "Chainsaw Man",
    description: "Chainsaw Skull Wall Poster",
    price: 200,


  },
  {
    img_id: 4,
    anime: "Baki",
    description: "Yujiro Hanma Wall Poster",
    price: 150,


  },
  {
    img_id: 5,
    anime: "One Piece",
    description: "WhiteBeard Wall Poster",
    price: 500,


  },
  {
    img_id: 6,
    anime: "One Piece",
    description: "Luffy 5th Gear  Wall Poster",
    price: 249,
  },
];

const SingleProduct = () => {

  const AddToCartHandler = (e) => {
    e.preventDefault();

  }
  const [quant, setQuant] = useState(1);
  const quantIncHandler = () => {
    setQuant((prevState) => prevState + 1);
  }
  const quantDeccHandler = (e) => {
    if (quant > 1)
      setQuant((prevState) => prevState - 1);
  }
  let id = +useParams().product_id;
  let props = imgArr.find((item) => item.img_id === id)
  let imgSrc = imgMap[props.img_id];
  
  return (
    <div>



<Navigation/>

      <div className='mt-[55px]  w-full  flex flex-col items-center lg:flex-row lg:justify-evenly p-6  '>
        <div className="min-h-[100px] min-w-[0px]  ">
          <img
            src={imgSrc}
            alt=""
            className="w-full h-full object-cover  "
          />
        </div>
        <div className='flex flex-col p-6 max-w-[700px] '>

          <span className='text-gray-600 p-2'>Epic Stuff</span>

          <p className='text-3xl tracking-wider p-2 '>ANIME-{props.anime}-{props.description} </p>

          <div className='flex p-2 '>
            <span className='bg-red-700 text-white px-2'>SALE</span>
            <span className='px-2 text-gray-600'>Rs. {props.price}</span>
            <span className="line-through text-gray-600 px-2 ">
              {props.price + 273}
            </span>
          </div>

          <p className=' p-2 text-gray-600'>Tax included. <span className='text-red-700'>Shipping</span> calculated at checkout</p>

          <div className='flex flex-row justify-center p-1'>
            <div className='p-2 flex-1' >
              <p className='p-1 text-gray-700'>SIZE</p>
              <select className='p-1' >
                <option  >A4 With Frame</option>
              </select>
            </div>
            <div className='p-2 flex-1'>
              <p className='p-1 text-gray-700'>QUANTITY</p>
              <div className='flex flex-row bg-gray-200 rounded-sm'>
                <button onClick={quantDeccHandler} className='border-r-2 border-gray-300  px-1 flex-1'>-</button>
                <span className='px-1 flex-1 text-center'>{quant}</span>
                <button className="px-1 flex-1 border-l-2 border-gray-300" onClick={quantIncHandler}>+</button>
              </div>
            </div>
          </div>

          <button className='border-2 rounded-md border-green-800 p-2 text-green-900' onClick = {AddToCartHandler}>ADD TO CART</button>
          <button className='mt-2 p-2 text-white rounded-md bg-green-800'>BUY IT NOW</button>

          <div className='p-2 font-bold text-gray-500 py-5 leading-loose'>
            <ul className='list-disc'>
              <li>Single Design Poster Comes Unframed/Framed.</li>
              <li>High-Quality Prints Using Non-Toxic Acrylic Ink imported on 300 GSM Paper.</li>
              <li>1 Inch Thick - Mdf Moulding Handmade Frame, Shatter-Proof Styrene Facing, And Metal Hangers.</li>
              <li>Perfect for Wall Décor and to gift your friends and siblings.</li>
              <li>Great accessory to your home and to decorate your Offices around.</li>
            </ul>
          </div>

          <div className='p-2 bg-green-800 text-white rounded-md'>
            <p >
              Let's Make 2023 A Little Better | Time To Spread Happiness! | 10% Off On All Orders Except Collectibles - Use Code: BETTER2023
            </p>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleProduct;