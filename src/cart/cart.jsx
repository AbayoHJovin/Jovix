import { FaShoppingCart, FaHome, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "./form";

export default function Cart() {
  const [isAvailable, setAvailable] = useState([]);
  const [subTotal, setSubTotal] = useState({});
  const [total, setTotal] = useState(0);
  const icon = [];
  const [formCalled, setFormCalled] = useState("hidden");
  const [itemName, setItemName] = useState({});
  const [scale, setScale] = useState(0);

  for (let i = 0; i < 1; i++) {
    icon.push(<FaCheckCircle className="mt-[4.3px]" key={i} />);
  }

  useEffect(() => {
    function getData() {
      const cartItems = localStorage.getItem("CartItems");
      if (cartItems) {
        const data = JSON.parse(cartItems);
        setAvailable(data);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    let sum = 0;
    for (const item of isAvailable) {
      sum += item.price * (subTotal[item.id] || 1);
    }
    setTotal(sum);
  }, [subTotal, isAvailable]);


  function removeItem(item, index) {
    const isonCart = JSON.parse(localStorage.getItem("CartItems"));
    const wantedProduct = isonCart.indexOf(isonCart[index]);
    isonCart.splice(wantedProduct, 1);
    localStorage.setItem("CartItems", JSON.stringify(isonCart));
    setAvailable((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  }
  function buyNow(item) {
    setItemName(item);
    setFormCalled("visible");
    setScale(1);
  }
  function handleCancel() {
    setFormCalled("hidden");
  }

  const navigate = useNavigate();

  return (
    <>
      <nav className="text-black bg-white py-7 flex justify-between sticky top-0">
        <div className="flex items-center md:ml-[90px] cursor-pointer">
          <FaShoppingCart size={30} className="mr-3" />
          <h1 className="flex font-bold">J{icon}VIX</h1>
        </div>
        <FaHome
          className="float-right md:mr-32 cursor-pointer"
          size={30}
          onClick={() => navigate("/")}
        />
      </nav>
      {isAvailable.length ? (
        <div className="container mx-auto">
          <h1 className="text-center my-10 text-4xl font-bold">
            Shopping Cart
          </h1>
          <OrderForm
            item={itemName}
            handleCancel={handleCancel}
            visibility={formCalled}
            className={`transform scale-${scale} transition-transform duration-1000 ease-in-out`}
          />

          {isAvailable.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              } flex flex-col md:flex-row mx-7 mt-10 rounded-md items-center p-10 md:p-10`}
            >
              <div className="md:w-1/5 flex items-center justify-center md:justify-start">
                <img
                  src={item.thumbnail}
                  alt={item.id}
                  className="w-48 h-48 mr-3"
                />
              </div>
              <div className="md:w-2/5 font-bold text-2xl text-center md:text-left">
                {item.title}
              </div>
              <div className="md:w-1/5 font-bold text-4xl text-center">
                £{item.price}
              </div>
              <div className="md:w-1/5 flex flex-col mr-10 items-center justify-center md:items-start md:justify-start mt-4 md:mt-0">
                <h1 className="text-center md:text-left">{item.description}</h1>
                <div className="flex mt-4 md:mt-0">
                  <button
                    onClick={() => buyNow(item)}
                    className="bg-orange-400 rounded-xl px-6 py-2 text-white mr-2 md:mr-4"
                  >
                    Order
                  </button>
                  <button
                    onClick={() => removeItem(item, index)}
                    className="bg-red-600 rounded-xl px-6 py-2 text-white mr-24 md:mr-10"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className=" flex justify-center items-center h-screen text-4xl font-bold">
          You don't have any item in the cart
        </h1>
      )}
    </>
  );
}
