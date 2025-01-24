import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { IoChevronBack } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable"; // Import Swipeable
import img1 from "./img/fam/1.png"
import img2 from "./img/fam/2.png"
import img3 from "./img/fam/3.png"
import img4 from "./img/fam/Asset 4 (1).png"


const images = [img1, img2 , img3 , img4];

function Fam() {
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
        <h1 className="text-3xl text-center font-karantina">TP BRIEFCASE</h1>
      </div>

      {/* กล่องรูปภาพใหญ่ */}
      <div
        className="w-96 h-96 border border-solid border-gray-400 rounded-lg  mx-auto flex items-center justify-center overflow-hidden"
        {...handlers}
      >
        <img
          src={images[currentImageIndex]}
          alt="Current"
          className="w-full h-full object-contain transition-transform duration-300"
        />
      </div>

     {/* ตัวเลือกสินค้า - Scrollable และ Scale */}
      <div className="mt-4 flex justify-center">
        <div className="flex justify-center items-center gap-x-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-[80px] h-20 border border-solid border-gray-400 flex justify-center items-center rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
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
      <footer className="bg-black w-full mt-5 flex items-center justify-between px-6 py-4 ">
        {/* ข้อความเกี่ยวกับพรีออเดอร์ */}
        <div className="text-white font-prompt">
          <h1 className="text-xl font-semibold">สั่งพรีออเดอร์สินค้า</h1>
          <h1 className="text-sm">ส่งปลายทาง + 60 บาท</h1>
        </div>

        {/* ไอคอนตะกร้าสินค้า */}
        <div className="flex items-center justify-center h-14 w-auto gap-x-2 px-10 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
          <h1 className="text-white text-[20px] font-prompt">229</h1>
          <RiMoneyDollarCircleFill className="text-white text-[20px]" />
        </div>
      </footer>
    </div>
  );
}

export default Fam;
