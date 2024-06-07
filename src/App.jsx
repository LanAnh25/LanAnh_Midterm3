import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import cả icon mặt trời và mặt trăng
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

function App() {

  const savedDarkMode = localStorage.getItem("isDarkMode") === "true";

  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode); // State để theo dõi chủ đề hiện tại
  const [icon, setIcon] = useState(savedDarkMode ? faMoon : faSun); // State để xác định biểu tượng hiển thị

  // Lưu trạng thái ban đêm vào Local Storage khi có thay đổi
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Đảo ngược giá trị của chủ đề
    setIcon(isDarkMode ? faSun : faMoon); // Thay đổi biểu tượng khi chuyển đổi chủ đề
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : ''}`}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="toggle-theme">
            <FontAwesomeIcon icon={icon} onClick={toggleTheme} style={{ color: 'yellow' }} />
          </div>
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
