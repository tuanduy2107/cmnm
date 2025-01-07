import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
