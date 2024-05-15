import {
    FaLinkedin,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaShoppingCart,
    FaCheckCircle,
  } from "react-icons/fa";
  import { FaCopyright } from "react-icons/fa6";
  
  export default function Footer() {
    const icon = [];
    for (let i = 0; i < 1; i++) {
      icon.push(<FaCheckCircle className="mt-[4.3px] " key={i} />);
    }
    return (
      <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#000] mt-8">
        <div className="md:ml-[40px] md:mr-6">
          <div className="flex items-center md:ml-[30px]">
            <FaShoppingCart size={30} className="mr-3" />
            <h1 className="flex font-bold">J{icon}VIX</h1>
          </div>
          <p className="py-4 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            odit, dolor doloribus cupiditate corporis eum ex! Nobis tenetur
            dignissimos quidem.
          </p>
          <div className="flex md:w-[75%] my-6 justify-between">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
            <FaGithubSquare size={30} className="cursor-pointer" />
            <FaLinkedin size={30} className="cursor-pointer" />
          </div>
          <div className="flex">
            <FaCopyright />
            <h2>A.H.Jovin | 2023-2024</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 justify-between mt-6 text-gray-400">
          <div className="mt-6 md:mt-0">
            <h6 className="font-medium text-white ">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Analytics</li>
              <li className="py-2 text-sm cursor-pointer">Marketing</li>
              <li className="py-2 text-sm cursor-pointer">Commerce</li>
              <li className="py-2 text-sm cursor-pointer">Insights</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h6 className="font-medium text-white ">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Pricing</li>
              <li className="py-2 text-sm cursor-pointer">Documentation</li>
              <li className="py-2 text-sm cursor-pointer">Guides</li>
              <li className="py-2 text-sm cursor-pointer">API Status</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h6 className="font-medium text-white ">Company</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">About</li>
              <li className="py-2 text-sm cursor-pointer">Blog</li>
              <li className="py-2 text-sm cursor-pointer">Jobs</li>
              <li className="py-2 text-sm cursor-pointer">Press</li>
              <li className="py-2 text-sm cursor-pointer">careers</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h6 className="font-medium text-white ">Legal</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Claim</li>
              <li className="py-2 text-sm cursor-pointer">policy</li>
              <li className="py-2 text-sm cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  