import { React, useState } from 'react';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function GameContainer() {
  const background = require('../assets/background.jpg');

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        toggleMenu(true);
      }}
    >
      <img src={background} />;
      <ControlledMenu
        {...menuProps}
        anchorPoint={anchorPoint}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>Waldo</MenuItem>
        <MenuItem>Odlaw</MenuItem>
        <MenuItem>Wizard</MenuItem>
      </ControlledMenu>
    </div>
  );
}

export default GameContainer;
