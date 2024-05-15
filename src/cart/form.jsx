import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function OrderForm({ item, handleCancel, visibility }) {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const formRef = useRef(null);

  useEffect(() => {
    if (visibility === "visible") {
      setEmail("");
      setAddress("");
      setQuantity(1);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibility]);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      handleCancel();
    }
  };

  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/bought");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50 ${
        visibility === "visible"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      } transition-opacity ease-in-out duration-300`}
    >
      <div
        ref={formRef}
        className={`p-4 w-full md:w-1/2 bg-white rounded-md transition-transform duration-300 ease-in-out transform scale-${
          visibility === "visible" ? "100" : "0"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="w-full border rounded-md px-3 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="w-full border rounded-md px-3 py-2"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min={1}
          />
        </div>
        <div className="mb-4">
          <p className="font-bold">Total Price: £{item.price * quantity}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleOrder}
          >
            Confirm
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
