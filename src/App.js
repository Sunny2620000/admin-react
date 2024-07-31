// Import statements for your components
import Sidebar from "./Components/Sidebare"; // Make sure the filename is correct
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";

// Import BrowserRouter from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ControlSidebar from "./Components/ControlSidebar";
import Profile from "./Components/Users/Profile";

function App() {
  return (
    <div className="wrapper">
      
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <ControlSidebar/>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
