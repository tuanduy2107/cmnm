import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import AuthForm from "./pages/Login";
import HomePage from "./pages/HomePage";
import VeChungToi from "./pages/VeChungToi";
import Campaign from "./pages/Campaign";
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/about-us" element={<VeChungToi />} />
        <Route path="/campaign" element={<Campaign />} />
      </Routes>
    </Router>
  );
}

export default App;
