import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/home"; // your homepage
import Shop from "./pages/Shop";
import Designer from "./pages/Designer";
// import SignupPage from "./SignupPage"; // optional

function App() {
  return (
    <Router basename="vibeprint">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> optional */}
      </Routes>
    </Router>
  );
}

export default App;
