import React from 'react';
import PropTypes from 'prop-types';
function LeaderboardCard(props) {
  console.log('ello', props);
  return (
    <li className="text-white flex border-b border-slate-600">
      <div className=" pr-2 text-blue">{props.name}</div>
      <div>Completed in: {props.time} seconds</div>
    </li>
  );
}

LeaderboardCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
};

export default LeaderboardCard;
