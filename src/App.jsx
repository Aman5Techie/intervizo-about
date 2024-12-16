import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import './App.css';
import SessionRequest from './pages/SessionRequest';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/session-request" element={<SessionRequest />} />
      </Routes>
    </Router>
  );
}

export default App;