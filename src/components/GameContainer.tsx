import React from 'react';
import { useState } from 'react';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import menuItemClickHandler from '../helpers/menuItemClickHandler';

interface MainLayoutProps {
  clickedCharacters: Array<string>;
  addCharacter: Function;
  setFinished: Function;
}

function GameContainer(props: MainLayoutProps) {
  const background = require('../assets/background.jpg');

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [clickedCoords, setClickedCoords] = useState({ x: 0, y: 0 });
  const [isDark, setDark] = useState(true);

  const characters = ['Waldo', 'Odlaw', 'Wizard'];
  const menuItems = characters.map((character) => (
    <MenuItem
      key={character}
      value={character}
      onClick={(e) => {
        menuItemClickHandler(
          e.value,
          clickedCoords.x,
          clickedCoords.y,
          props.clickedCharacters,
          props.addCharacter,
          props.setFinished
        );
      }}
    >
      {character}
    </MenuItem>
  ));
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        toggleMenu(true);

        const bounds = (e.target as HTMLElement).getBoundingClientRect();
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
        theming={isDark ? 'dark' : undefined}
      >
        {menuItems}
      </ControlledMenu>
    </div>
  );
}

export default GameContainer;
