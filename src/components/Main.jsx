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
            <h1 className="text-2xl font-prompt font-bold text-red-600 mb-4">
              ปิดรับพรีออเดอร์
            </h1>
            <h4 className="text-lg font-prompt mb-4">
              ขอบคุณสำหรับการสั่งจองพรีออเดอร์ของทุกท่าน หวังว่าทางเราจะเปิดให้ทุกท่านใช้บริการอีกครั้ง
            </h4>
            {/* Optional: Add a button or link to close or return */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
