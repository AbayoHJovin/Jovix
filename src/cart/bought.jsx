import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function BoughtItem() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-4xl">
        Sorry, This app is still being developed
      </h1>
      <h3 className="text-center text-2xl my-3">Thank you for trying</h3>
      <button
        onClick={() => navigate("/home")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Home
      </button>
      <div className="flex items-center">
        <AiOutlineCopyrightCircle className="mr-1" />
        <span>a.h.jovin | 2024</span>
      </div>
    </div>
  );
}
