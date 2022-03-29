import React from 'react';
import PropTypes from 'prop-types';
function LeaderboardCard(props) {
  console.log('ello', props);
  return (
    <div className="text-white flex">
      <div>{props.name}</div>
      <div>{props.time}</div>
    </div>
  );
}

LeaderboardCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
};

export default LeaderboardCard;
