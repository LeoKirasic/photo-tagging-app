import React from 'react';
import getLeaderboard from '../helpers/getLeaderboard';
import LeaderboardList from './LeaderboardList';
import { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  // @ts-ignore
  // ts-ignoring here because it needs further refactoring.
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
