import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/Loading'; // Import trang loading
import './App.css';

const AuthForm = lazy(() => import('./pages/Login'));
const HomePage = lazy(() => import('./pages/HomePage'));
const VeChungToi = lazy(() => import('./pages/VeChungToi'));
const Campaign = lazy(() => import('./pages/Campaign'));
const Gallery = lazy(() => import('./pages/Gallery'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/about-us" element={<VeChungToi />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
