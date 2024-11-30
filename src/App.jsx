import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './pages/login/Login.jsx'
import { Dashboard } from './pages/dashboard/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;