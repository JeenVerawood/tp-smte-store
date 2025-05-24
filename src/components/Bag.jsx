import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import img1 from "./img/Bag/1.png";
import img2 from "./img/Bag/2.png";

const images = [img1, img2];

function Bag() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNotice, setShowNotice] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
  });

  return (
    <div className="flex flex-col h-[90vh] w-full mt-2">
      {/* ชื่อสินค้า */}
      <div className="mb-2 flex justify-between items-center w-full mx-auto h-12 px-6">
        <Link to="/">
          <IoChevronBack size={24} className="text-gray-700" />
        </Link>
        <h1 className="text-3xl text-center font-karantina">TP SMTE TOTE BAG</h1>
      </div>

      {/* กล่องรูปภาพใหญ่ */}
      <div
        className="w-80 h-80 border border-solid border-gray-400 rounded-lg mx-auto flex items-center justify-center overflow-hidden"
        {...handlers}
      >
        <img
          src={images[currentImageIndex]}
          alt="Current"
          className="w-full h-full object-contain transition-transform duration-300"
        />
      </div>

      {/* ตัวเลือกสินค้า */}
      <div className="mt-4 flex justify-center w-full">
        <div className="flex justify-start h-24 items-center gap-x-4 overflow-y-hidden w-80 mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[80px] h-20 border border-solid border-gray-400 flex justify-center items-center rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
                currentImageIndex === index ? "scale-110 border-blue-500" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black w-full mt-5 flex items-center justify-between px-6 py-4">
        <h1 className="text-[15px] text-white font-prompt">159 BATH</h1>

        {/* ใช้ button แทน a */}
        <button
          onClick={() => setShowNotice(true)}
          className="flex items-center justify-center h-14 px-10 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors w-[70%] max-w-[300px] mx-auto"
        >
          <h1 className="text-white text-[15px] font-prompt text-center">สั่งพรีออเดอร์สินค้า</h1>
        </button>
      </footer>

      {/* Popup เหมือนหน้า Fam */}
      {showNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-[90%] relative shadow-lg">

            {/* ปุ่มปิด */}
            <button
              onClick={() => setShowNotice(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            {/* เนื้อหา */}
            <h1 className="text-lg font-semibold mb-2 text-center">📌 อ่านก่อนสั่งซื้อ</h1>
            <p className="text-sm text-gray-700 text-center mb-4">
              กรณีนำมาโรงเรียนต้องนำมาพร้อมกระเป๋าหลักเท่านั้น<br />
              หากโดนยึดทางเราไม่รับผิดชอบทุกกรณี
            </p>

            {/* ปุ่มตกลง */}
            <a
              href="https://forms.gle/FGSMTWhWCP6JrFgf6" // เปลี่ยนลิงก์ได้ตามต้องการ
              rel="noopener noreferrer"
              className="block text-center w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setShowNotice(false)}
            >
              ตกลง
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bag;