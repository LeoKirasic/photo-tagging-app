import { React, useState, useEffect } from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import ViewCharactersModal from './components/ViewCharactersModal';
import Form from './components/Form';
import Leaderboard from './components/Leaderboard';
import LeaderboardLayout from './LeaderboardLayout';
import MainLayout from './MainLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
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
