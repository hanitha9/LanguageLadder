import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Lesson from './components/Lesson';
import Community from './components/Community';

// Main application component with routing
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Languageladder</h1>
            <div>
              <a href="/" className="mr-4 hover:underline">Home</a>
              <a href="/login" className="mr-4 hover:underline">Login</a>
              <a href="/register" className="mr-4 hover:underline">Register</a>
              <a href="/lesson" className="mr-4 hover:underline">Lessons</a>
              <a href="/community" className="mr-4 hover:underline">Community</a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
