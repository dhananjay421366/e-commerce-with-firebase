import React from "react";
import Layout from "../../Components/Layout/Layout";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/FilterProduct/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@material-tailwind/react";
import { addToCart } from "../../Redux/CartSlice";
import toast from "react-hot-toast";
function Home() {
//   const dispatch = useDispatch()
//   const cartItems = useSelector((state)=>state.cart)
// console.log(cartItems);
//   const addCart = () => {
//     dispatch(addToCart('shirt'))
//     toast.success('add to cart')
//   }
//   const remove = () => {
//     dispatch(removeFromCart('shirt'))
//     toast.success('remove from cart')
//   }
  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className="bg-green-600 px-2 py-3" onClick={()=>addCart()}>add</button> <br />
        <button className="bg-green-600 px-2 py-3" onClick={()=>remove()}>remove</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard/>
      <Testimonial/>
    </Layout>
  );
}

export default Home;
