import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { IoChevronBack } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable"; // Import Swipeable
import img1 from "./img/Jacket/1.png";
import img2 from "./img/Jacket/2.png";
import img3 from "./img/Jacket/3.png";
import img4 from "./img/Jacket/4.png";
import img5 from "./img/Jacket/5.png";
import img6 from "./img/Jacket/6.png";

const images = [img1, img2, img3, img4, img5, img6];

function Jacket() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ฟังก์ชันเปลี่ยนรูปภาพ
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // การตั้งค่า Swipe
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
        <h1 className="text-3xl text-center font-karantina">TP JACKET</h1>
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

      {/* ตัวเลือกสินค้า - Scrollable และ Scale (เลื่อนในแกน X) */}
      <div className="mt-4 flex justify-center w-full">
        <div className="flex justify-start items-center gap-x-4 overflow-y-hidden w-80 mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[80px] h-20 border border-solid border-gray-400 flex justify-center items-center rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
                currentImageIndex === index ? "scale-110 border-blue-500" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black w-full mt-5 flex items-center justify-center px-6 py-4 ">
        <a href="https://forms.gle/Vu8w8UQtrzwvxBcT7" className="w-full">
          <div className="flex items-center justify-center h-14 px-10 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors w-full max-w-[300px] mx-auto">
            <h1 className="text-white text-[20px] font-prompt text-center">สั่งพรีออเดอร์สินค้า</h1>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Jacket;
