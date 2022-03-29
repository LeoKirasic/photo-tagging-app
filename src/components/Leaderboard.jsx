import React from 'react';
import getLeaderboard from '../helpers/getLeaderboard';
import LeaderboardCard from './LeaderboardCard';
import LeaderboardList from './LeaderboardList';
import { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const data = await getLeaderboard();
      setLeaderboard(data);
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!leaderboard) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex items-center flex-col text-white bg-slate-900">
        <h2 className="border-b border-slate-600 font-bold text-xl">
          Leaderboard
        </h2>
        <LeaderboardList items={leaderboard}></LeaderboardList>
      </div>
    );
  }
}

export default Leaderboard;
