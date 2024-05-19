import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Explanations({ filter }) {
  const [amount, setAmount] = useState(0);

  function handleInputChange(e) {
    const value =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    filter(value);
  }
  useEffect(() => {
    function getProducts() {
      const cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
      setAmount(cartItems.length);
    }
    const interval = setInterval(getProducts, 20);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="mb-8 md:mb-16 bg-gray-300 sticky top-12 md:top-24 z-[2]">
      <div className="flex mt-2 md:mt-5 p-3 md:p-5 flex-wrap items-center justify-between">
        <h1 className="font-bold text-2xl md:text-3xl mb-2 md:mb-0 md:mr-10 hidden md:block">
          Our Products
        </h1>
        <div className="flex gap-10 justify-center content-center">
          <div className="relative flex-grow w-full max-w-md md:max-w-[450px] mx-auto md:mx-0">
            <AiOutlineSearch
              size={20}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black"
            />
            <input
              type="search"
              onInput={handleInputChange}
              className="outline-none bg-white border border-black w-full h-10 md:h-12 rounded-lg pl-10 pr-2 text-black"
              placeholder="Search for a product ..."
            />
          </div>
          <div className="relative">
            <AiOutlineShoppingCart
              onClick={() => navigate("/cart")}
              size={32}
              className="fill-orange-400 cursor-pointer mr-4 md:mr-8"
            />
            <span className="absolute -top-2 -right-2 bg-green-500 p-1 rounded-full font-bold mr-4 md:mr-8 text-white">
              {amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
