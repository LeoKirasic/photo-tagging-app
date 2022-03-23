import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import checkCoordinates from '../helpers/checkCoordinates';
import menuItemClickHandler from '../helpers/menuItemClickHandler';
function GameContainer(props) {
  const background = require('../assets/background.jpg');

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [clickedCoords, setClickedCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        toggleMenu(true);

        const bounds = e.target.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        setClickedCoords({
          x: x,
          y: y,
        });
      }}
    >
      <img
        className="max-h-96 max-w-4xl w-auto h-auto rounded-md "
        src={background}
      />
      <ControlledMenu
        {...menuProps}
        anchorPoint={anchorPoint}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem
          value={'waldo'}
          onClick={(e) => {
            menuItemClickHandler(
              e.value,
              clickedCoords.x,
              clickedCoords.y,
              props.clickedCharacters,
              props.addCharacter
            );
          }}
        >
          Waldo
        </MenuItem>
        <MenuItem
          value={'odlaw'}
          onClick={(e) => {
            menuItemClickHandler(
              e.value,
              clickedCoords.x,
              clickedCoords.y,
              props.clickedCharacters,
              props.addCharacter
            );
          }}
        >
          Odlaw
        </MenuItem>
        <MenuItem
          value={'wizard'}
          onClick={(e) => {
            menuItemClickHandler(
              e.value,
              clickedCoords.x,
              clickedCoords.y,
              props.clickedCharacters,
              props.addCharacter
            );
          }}
        >
          Wizard
        </MenuItem>
      </ControlledMenu>
    </div>
  );
}

export default GameContainer;

GameContainer.propTypes = {
  clickedCharacters: PropTypes.array,
  addCharacter: PropTypes.func,
};
