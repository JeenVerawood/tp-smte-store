import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { IoChevronBack } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function Fam() {
  return (
    <div className="flex flex-col h-[90vh] w-full mt-4">
      {/* ชื่อสินค้า */}
      <div className="mb-6 flex justify-between items-center w-full mx-auto h-12 px-6">
        <Link to="/">
          <IoChevronBack size={24} className="text-gray-700" />
        </Link>
        <h1 className="text-xl text-center">Fam</h1>
      </div>
      
      {/* กล่องสินค้า */}
      <div className="w-96 h-96 border border-solid border-gray-400 rounded-lg mb-4 mx-auto">
        {/* You can add an image or other content here */}
      </div>
      
      {/* ตัวเลือกสินค้า */}
      <div className="mt-4 h-24 w-full flex justify-center gap-x-4">
        <div className="h-20 w-20 border border-solid border-gray-400 rounded-lg"></div>
        <div className="h-20 w-20 border border-solid border-gray-400 rounded-lg"></div>
        <div className="h-20 w-20 border border-solid border-gray-400 rounded-lg"></div>
        <div className="h-20 w-20 border border-solid border-gray-400 rounded-lg"></div>
      </div>
      
      {/* Footer Section */}
      <footer className="bg-black w-full flex items-center justify-between px-6 py-4 mt-auto">
        {/* ข้อความเกี่ยวกับพรีออเดอร์ */}
        <div className="text-white font-prompt">
          <h1 className="text-xl font-semibold">สั่งพรีออเดอร์สินค้า</h1>
          <h1 className="text-sm">ส่งปลายทาง + 60 บาท</h1>
        </div>
        
        {/* ไอคอนตะกร้าสินค้า */}
        <div className="flex items-center justify-center h-14 w-auto gap-x-2 px-10 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
            <h1 className="text-white text-[20px] font-prompt" >349 </h1>
            <RiMoneyDollarCircleFill  className="text-white text-[20px]" />
        </div>
      </footer>
    </div>
  );
}

export default Fam;
