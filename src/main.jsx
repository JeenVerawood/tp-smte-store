import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ไฟล์ CSS หลักที่มีคำสั่ง @tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
