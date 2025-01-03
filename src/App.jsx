import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Login from "./pages/Login";
import GreetingForm from "./pages/NewYear";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<GreetingForm />} />
        <Route path="/new-year" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
