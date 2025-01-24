import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Polo from "./components/Polo"; // Import Polo page
import Fam from "./components/Fam"; // Import Polo page
import Jacket from "./components/Jacket"; // Import Polo page
import Bag from "./components/Bag"; // Import Polo page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/polo" element={<Polo />} /> {/* เพิ่ม Route สำหรับ Polo */}
        <Route path="/bag" element={<Bag />} /> {/* เพิ่ม Route สำหรับ Polo */}
        <Route path="/jacket" element={<Jacket />} /> {/* เพิ่ม Route สำหรับ Polo */}
        <Route path="/fam" element={<Fam />} /> {/* เพิ่ม Route สำหรับ Polo */}
        
      </Routes>
    </Router>
  );
}

export default App;
