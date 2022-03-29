import React from 'react';

function Header() {
  const title = `Where's`;

  return (
    <div className="flex border-x-black">
      <div className="text-2xl font-bold text-white mr-1">{title}</div>
      <div className="text-2xl font-bold text-white hover:text-blue">Waldo</div>
    </div>
  );
}

export default Header;
