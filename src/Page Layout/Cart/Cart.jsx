import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const carts = JSON.parse(localStorage.getItem('cart')) || []

    if(!carts.length) <div>cart is Empty</div>
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts.length} items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          {
            carts?.map(cart => {
                return(
                    <div key={cart.id} className="flex items-center hover:bg-gray-100 mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-28">
                <img className="h-24" src={cart?.image} alt="" />
              </div>
              <div className="flex flex-col justify-between mt-4 flex-grow">
                <span className="font-bold text-sm">{cart?.title}</span>
                <span className="text-red-500 text-xs capitalize">{cart?.category}</span>
                <div
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  href="#"
                >
                  remove
                </div>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg />
              <input
                className="mx-2 border text-center w-8"
                type="text"
                value={1}
              />
              <svg />
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              ${cart?.price}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              ${cart?.price * cart?.quantity}
            </span>
          </div>
                )
            })
          }
          
          <Link to={'/products'}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >Continue Reading 
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">$500</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              shiping
            </label>
            <select className="block p-2 text-gray-500 w-full text-sm">
              <option value="">standard Shopping -$10</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-800 px-5 py-2 text-sm text-white uppercase">
            Applay
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total Cost</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
