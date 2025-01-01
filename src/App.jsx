import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
// import Login from './pages/Login';
import GreetingForm from './pages/NewYear';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GreetingForm />}></Route>
        {/* <Route path='/new-year' element={<GreetingForm />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
