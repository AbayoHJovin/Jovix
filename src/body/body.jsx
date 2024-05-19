import { useState, useEffect } from "react";
import "../../src/index.css";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { AiFillLike, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Slide from "./slide";
import Explanations from "./explanations";
import Footer from "./Footer";

export default function Loader() {
  const [showMenu, setShowMenu] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("laptops");
  const [wantedImages, setWantedImages] = useState([]);
  const [phone, setPhone] = useState(null);
  const [searchParams, setSearchParams] = useState("");

  function search(input) {
    setSearchParams(input);
  }

  const icon = [];
  for (let i = 0; i < 1; i++) {
    icon.push(<FaCheckCircle className="mt-[4.3px]" key={i} />);
  }

  function handleClose() {
    setShowMenu(false);
  }

  function handleOpen() {
    setShowMenu(true);
  }

  function handleAddToCart(item) {
    const isonCart = JSON.parse(localStorage.getItem("CartItems")) || [];
    isonCart.push(item);
    localStorage.setItem("CartItems", JSON.stringify(isonCart));
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=100&skip=0`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const realData = await response.json();
        setImages([...realData.products]);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filteredImages = images.filter(
      (image) =>
        image.category.includes(filter) || image.category.includes(phone)
    );
    const searchedImages = filteredImages.filter((image) =>
      image.title.includes(searchParams)
    );
    if (searchedImages) {
      setWantedImages(searchedImages);
    } else {
      console.log("something went wrong");
    }
  }, [images, filter, searchParams]);

  function handlechange() {
    setFilter("furniture");
    setPhone(null);
    setShowMenu(false);
  }

  function handleWomen() {
    setFilter("men");
    setPhone(null);
    setShowMenu(false);
  }

  function handleMen() {
    setFilter("decoration");
    setPhone(null);
    setShowMenu(false);
  }

  function handleElectrical() {
    setFilter("laptop");
    setPhone("smart");
    setShowMenu(false);
  }

  function handleTops() {
    setFilter("light");
    setShowMenu(false);
  }

  function handleAll() {
    setFilter("");
    setShowMenu(false);
  }

  return (
    <div>
      <div className="sticky top-0 z-10">
        <nav className="flex items-center justify-between bg-black p-3">
          <div className="flex items-center cursor-pointer">
            <FaShoppingCart size={30} className="mr-3 text-white" />
            <h1 className="font-bold text-white flex">J{icon}VIX</h1>
          </div>

          <div className="hidden md:flex items-center h-[3rem] justify-center py-4 md:py-0">
            <p onClick={handleAll} className="nav-link">
              All
            </p>
            <p onClick={handleElectrical} className="nav-link">
              PC & Phones
            </p>
            <p onClick={handlechange} className="nav-link">
              Furniture
            </p>
            <p onClick={handleWomen} className="nav-link">
              Men & Women
            </p>
            <p onClick={handleMen} className="nav-link">
              Decoration
            </p>
            <p onClick={handleTops} className="nav-link">
              Lighting
            </p>
          </div>

          <div className="block md:hidden">
            {showMenu ? (
              <AiOutlineClose
                onClick={handleClose}
                className="cursor-pointer text-white z-30"
              />
            ) : (
              <AiOutlineMenu
                onClick={handleOpen}
                className="cursor-pointer text-white z-30"
              />
            )}
          </div>
        </nav>

        {showMenu && (
          <div className="absolute top-16 left-0 w-full bg-white md:hidden h-screen z-50 transition ease-in-out duration-500 transform translate-y-10">
            <nav className="flex flex-col items-center justify-center py-3">
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handleAll}
              >
                All
              </p>
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handleElectrical}
              >
                PC & Phones
              </p>
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handlechange}
              >
                Furniture
              </p>
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handleWomen}
              >
                Men & Women
              </p>
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handleMen}
              >
                Decoration
              </p>
              <p
                className="text-[#042961] w-full  mb-[0.9px] px-28 text-center py-10  h-[34px] hover:bg-[#c2c7cf] cursor-pointer border-b border-[#c2c7cf]"
                onClick={handleTops}
              >
                Lighting
              </p>
            </nav>
          </div>
        )}
      </div>

      <Slide />
      <Explanations filter={search} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {error ? (
          <h1>Error: {error.message}</h1>
        ) : wantedImages.length ? (
          wantedImages.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col bg-[#d2d0d0] rounded p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold mb-1">{item.title}</p>
                  <p className="text-gray-600 mb-2 font-semibold">
                    {item.brand}
                  </p>
                  <p className="text-gray-600 mb-2 font-bold text-[25px]">
                    £{item.price}
                  </p>
                </div>
                <AiFillLike
                  className="hover:text-white hover:bg-orange-500 rounded-full p-1 cursor-pointer md:mr-4"
                  size={40}
                />
              </div>
              <button
                onClick={() => {
                  handleAddToCart(item);
                }}
                className="bg-orange-500 text-white md:w-[100px] py-2 px-4 rounded hover:bg-orange-600 self-end"
              >
                Add
              </button>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}
