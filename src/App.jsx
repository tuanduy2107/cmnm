import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import VeChungToi from "./pages/VeChungToi";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<VeChungToi />} />
      </Routes>
    </Router>
  );
}

export default App;
