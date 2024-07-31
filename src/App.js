// Import statements for your components
import Sidebar from "./Components/Sidebare"; // Make sure the filename is correct
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";

// Import BrowserRouter from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ControlSidebar from "./Components/ControlSidebar";
import Profile from "./Components/Users/Profile";
import Register from "./Components/Register";
// import Login from './Components/Login';
// import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="wrapper">
      
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      {/* <NotFound/> */}
      {/* <Login/> */}
      <ControlSidebar/>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
