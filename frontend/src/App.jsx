import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GroupManager from './components/GroupManager';
import RandomNameGenerator from './components/RandomNameGenerator'; // 👈 New import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/group-manager" element={<GroupManager />} />
        <Route path="/random-name-generator" element={<RandomNameGenerator />} /> {/* 👈 New route */}
      </Routes>
    </Router>
  );
}

export default App;
