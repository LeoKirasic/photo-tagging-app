import React from 'react';
import Leaderboard from './components/Leaderboard';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <Router>
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/" element={<MainLayout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
