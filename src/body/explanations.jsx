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
    <div className="mb-[40px] bg-gray-300 sticky top-12 md:top-24 z-[4]">
      <div className="flex mt-[10px] p-5 flex-wrap items-center justify-between">
        <h1 className="font-bold text-[30px] mb-4 md:mb-0 md:mr-10">
          Our Products
        </h1>
        <div className="relative flex-grow md:max-w-[450px] mx-auto md:mx-0">
          <AiOutlineSearch
            size={20}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black"
          />
          <input
            type="search"
            onInput={handleInputChange}
            className="outline-none bg-[#fff] border border-black w-full h-[50px] rounded-lg pl-12 pr-2 text-black"
            placeholder="Which product are you looking for?"
          />
        </div>
        <div className="relative">
          <AiOutlineShoppingCart
            onClick={() => navigate("/cart")}
            size={50}
            className="fill-orange-400 cursor-pointer mr-20"
          />
          <span className="absolute -top-2 -right-2 bg-green-500 p-2 rounded-full font-bold mr-20 text-white">
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
}
