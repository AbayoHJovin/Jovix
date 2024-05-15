import Img1 from "./PC.jpg";
import cart1 from "./cart1.png";
export default function Slide() {
  return (
    <div>
      <div className="mx-4 md:mx-10">
        <div className="bg-[#d6c8c5] rounded-lg py-3 flex flex-col md:flex-row items-center mt-10">
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left mb-4 md:mb-0 flex-grow">
            <span className="text-green-900">Enjoy </span>Your Favourite
            Products
          </h1>
          <img
            src={cart1}
            alt="Cart Icon"
          />
        </div>
      </div>
    </div>
  );
}
