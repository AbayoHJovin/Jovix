import Img1 from "./PC.jpg";
import cart1 from "./cart1.png";

export default function Slide() {
  return (
    <div className="mx-4 md:mx-10 py-4 md:py-8">
      <div className="flex flex-col md:flex-row bg-[#d6c8c5] rounded-lg py-3 items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2 ml-5">
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left mb-4">
            <span className="text-green-900">Enjoy </span>Your Favourite
            Products
          </h1>
          <p className="text-center my-5 md:text-left">
            We provide better products which are appreciated by society
          </p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 ml-[30%] md:ml-4">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={cart1} alt="Cart Icon" />
        </div>
      </div>
    </div>
  );
}
