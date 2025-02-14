import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Jacket1 from "./img/Jacket/1.png";
import Bag1 from "./img/Bag/1.png";
import Jersey1 from"./img/jersey/1.png"
import Fam1 from "./img/fam/1.png"

function Main() {
  const [showSplash, setShowSplash] = useState(true); // ควบคุม Splash Screen

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // ซ่อน Splash หลัง 5 วิ
    }, 500);

    return () => clearTimeout(timer); // ล้าง Timer เมื่อ component ถูกถอด
  }, []);

  return (
    <main className="flex flex-col bg-white items-center justify-center overflow-hidden relative h-screen">
      {/* Splash Screen */}
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-1000 ${
          showSplash ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="font-karantina text-white tracking-widest text-3xl">
          T P - S M T E
        </h1>
        <h1 className="font-karantina text-white tracking-widest text-7xl">
          STORE
        </h1>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] p-2 gap-2 mt-4">
          <Link to="/polo">
            <div className="w-full rounded-lg h-48 bg-gray-100 border border-solid border-gray-400 flex items-center justify-center hover:scale-110 shadow-lg">
              <img src={Jersey1} className="scale-90 w-full h-full object-contain " alt="Polo" />
            </div>
          </Link>
          <Link to="/Bag">
            <div className="w-full rounded-lg h-48 bg-gray-100  border border-solid border-gray-400 flex items-center justify-center shadow-lg">
              <img src={Bag1} alt="Polo" className="scale-90 w-full h-full object-contain" />
            </div>
          </Link>
          <Link to="/fam">
            <div className="w-full rounded-lg h-48 bg-gray-100  border border-solid border-gray-400 flex items-center justify-center shadow-lg">
              <img src={Fam1} alt="Polo" className="scale-90 w-full h-full object-contain" />
            </div>
          </Link>
          <Link to="/jacket">
            <div className="w-full rounded-lg h-48 bg-gray-100  border border-solid border-gray-400 flex items-center justify-center shadow-lg">
              <img src={Jacket1} className="scale-90 w-full h-full object-contain " alt="Polo" />
            </div>
          </Link>
          </div>
            {/* Optional: Add a button or link to close or return */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
