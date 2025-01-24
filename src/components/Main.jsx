import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import Jacket1 from "./img/Jacket/1.png";
import Bag1 from "./img/Bag/1.png";

function Main() {
  const [showSplash, setShowSplash] = useState(true); // ควบคุม Splash Screen

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // ซ่อน Splash หลัง 5 วิ
    }, 500);

    return () => clearTimeout(timer); // ล้าง Timer เมื่อ component ถูกถอด
  }, []);

  return (
    <main className="flex flex-col bg-gray-200 items-center justify-center overflow-hidden relative">
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
        <div className="font-prompt justify-center flex  text-xl mt-4">เลือกดูสินค้า</div>
        <div className="min-h-[69vh] md:min-h-[60vh] lg:min-h-[70vh] max-h-[calc(100vh-8rem)] w-full">
          {/* Grid สินค้า */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] p-2 gap-2 mt-4">
            <Link to="/Jacket">
              <div className="w-full rounded-lg h-48 bg-white border border-solid border-gray-400 flex items-center justify-center hover:scale-110">
                <img src={Jacket1} className="scale-90 w-full h-full object-contain " alt="Polo" />
              </div>
            </Link>
            <Link to="/Bag">
              <div className="w-full rounded-lg h-48 bg-white border border-solid border-gray-400 flex items-center justify-center">
                <img src={Bag1} alt="Polo" className="scale-90 w-full h-full object-contain" />
              </div>
            </Link>
            <Link to="/bag">
              <div className="w-full rounded-lg h-48 bg-white border border-solid border-gray-400 flex items-center justify-center">
                <img src="" alt="Polo" className="scale-90 w-full h-full object-contain"/>
              </div>
            </Link>
            <Link to="/jacket">
              <div className="w-full rounded-lg h-48 bg-white border border-solid border-gray-400 flex items-center justify-center">
                <img src={Jacket1} className="scale-90 w-full h-full object-contain " alt="Polo" />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="h-24 w-screen bg-black top- sticky flex items-center justify-between px-6 py-4">
          <div className="text-white font-prompt">
            <h1 className="text-xl font-semibold">สั่งพรีออเดอร์สินค้า</h1>
            <h1 className="text-sm">ส่งปลายทาง + 60 บาท</h1>
          </div>
          <div className="flex items-center justify-center h-14 w-14 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
            <FaBasketShopping size={24} className="text-white" />
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Main;
