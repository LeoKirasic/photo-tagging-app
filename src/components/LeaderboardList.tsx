import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardCard from './LeaderboardCard';

interface leaderboardObject {
  id: string;
  name: string;
  time: string;
}

interface LeaderboardProps {
  items: Array<leaderboardObject>;
}

function LeaderboardList(props: LeaderboardProps) {
  const items = props.items;
  return (
    <ul>
      {items.map((item) => {
        return (
          <LeaderboardCard
            key={item.id}
            name={item.name}
            time={item.time}
          ></LeaderboardCard>
        );
      })}
    </ul>
  );
}

LeaderboardList.propTypes = {
  items: PropTypes.array,
};
export default LeaderboardList;
