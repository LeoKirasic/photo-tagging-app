import React from 'react';
import getLeaderboard from '../helpers/getLeaderboard';
function Leaderboard() {
  const leaderboard = getLeaderboard();
  console.log(leaderboard);
  return <div className="text-white">Leaderboard</div>;
}

export default Leaderboard;
