import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import img1 from "./img/fam/1.png";
import img2 from "./img/fam/2.png";
import img3 from "./img/fam/3.png";
import img4 from "./img/fam/Asset 4 (1).png";
import img5 from "./img/fam/5.png";
import img6 from "./img/fam/6.png";
import img7 from "./img/fam/7.png";

const images = [img7, img5, img6, img1, img2, img3, img4];

function Fam() {
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
    <div className="flex flex-col w-full mt-2">
      {/* ชื่อสินค้า */}
      <div className="mb-2 flex justify-between items-center w-full mx-auto h-12 px-6">
        <Link to="/">
          <IoChevronBack size={24} className="text-gray-700" />
        </Link>
        <h1 className="text-3xl text-center font-karantina">TP BRIEFCASE</h1>
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
        <div className="flex items-center gap-x-4 overflow-x-auto w-80 mx-auto scrollbar-hide">
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-[80px] w-[80px] h-20 border border-solid border-gray-400 flex justify-center items-center rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
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
        <h1 className="text-[15px] text-white font-prompt">349 BATH</h1>

        {/* ใช้ button แทน <a href> */}
        <button
          onClick={() => setShowNotice(true)}
          className=" flex items-center justify-center h-14 px-10 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors w-[70%] max-w-[300px] mx-auto"
        >
          <h1 className="text-white text-[15px] font-prompt text-center">สั่งพรีออเดอร์สินค้า</h1>
        </button>
      </footer>

      {/* Popup */}
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
            <button className="w-full">
             <a
             href="https://forms.gle/BMB6i8pYroEfnXmi7"
             rel="noopener noreferrer"
             className="block text-center w-[100%] bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
           >
             ตกลง
           </a> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fam;