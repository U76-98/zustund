"use client"
import {useState} from 'react'
import { Flag, ShoppingBag } from "lucide-react";
import cartStore from '../data-store/cart-store';
export default function Amazon() {
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <ProductList  />
      </div>
    </div>
  );
}
function ProductList() {
  const {cart} = cartStore();
  return (
    <div className="flex flex-col">
      {cart.map((product,index) => {
        return <ProductCard product={product} key={index} 
        />;
      })}
    </div>
  );
}
function ProductCard({ product}) {
  const {addToCart} = cartStore();
  return (
    <div className="flex flex-row h-[300px] w-[800px] border border-gray-100">
      <div className="p-6 bg-gray-300">
        <img src={product.img} width={200} />
      </div>
      <div className="flex flex-col m-3 justify-center">
        <ProductTitle title={product.title} />
        <div className="text-gray-700 text-lg">{product.desc}</div>
        <div className="flex flex-row items-end space-x-2">
          <div className="text-3xl font-bold text-green-500">
            Rs. {product.price}
          </div>
          <div className="text-lg font-bold text-red-500">
            %{product.discount} Discount
          </div>
        </div>

        <div className="text-lg">
          Free Delivery <span className="font-bold">{product.delivery}</span>
        </div>
        <div 
          onClick={(event)=> {
            addToCart(product)
          }}
        className="bg-yellow-300 p-2 text-center rounded-full font-bold text-lg">
          Add to Cart
        </div>
      </div>
    </div>
  );
}
function ProductTitle({ title }) {
  return <div className="font-bold text-black text-xl">{title}</div>;
}
function Navbar() {
  return (
    <div className="flex flex-row bg-black text-white items-center justify-center">
      <div className="mr-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSb4lGANjKmXnj-qOz6dX-tvglN7u-0STA&s"
          width={100}
        />
      </div>
      <NavCol2Item title={"Deliver To"} subtitle={"Bangalore"} />
      <SearchBar />

      <NavRow2Item icon={<Flag />} subtitle={"EN"} />
      <NavCol2Item title={"Hello Akshay"} subtitle={"Accounts & Lists"} />
      <NavCol2Item title={"Returns"} subtitle={"& Orders"} />
      <NavRow2Item icon={<ShoppingBag />} subtitle={"Cart"} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-row bg-white text-black justify-center items-center">
      <div className="bg-gray-200 p-2">All</div>
      <div>
        <input className="w-[900] py-2" />
      </div>
      <div className="bg-orange-400 p-2">Search</div>
    </div>
  );
}

function NavCol2Item({ title, subtitle }) {
  return (
    <div className="flex flex-col mx-4">
      <div className="text-gray-400 text-[12px] font-bold">{title}</div>
      <div className="font-bold text-[14px]">{subtitle}</div>
    </div>
  );
}
function NavRow2Item({ icon, subtitle }) {
  return (
    <div className="flex flex-row items-center">
      <div className="text-gray-400 text-[20px] font-bold m-2">{icon}</div>
      <div className="font-bold text-[20px]">{subtitle}</div>
    </div>
  );
}
