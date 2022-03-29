import React from 'react';
import getLeaderboard from '../helpers/getLeaderboard';
import LeaderboardCard from './LeaderboardCard';
import { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const promise = getLeaderboard();
    promise.then((data) => {
      setLeaderboard(data);
      setIsLoaded(true);
    });
    (error) => {
      setIsLoaded(true);
      setError(error);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {leaderboard.map((item) => {
          return (
            <LeaderboardCard key={item.id} name={item.name} time={item.time} />
          );
        })}
      </ul>
    );
  }
}

export default Leaderboard;
