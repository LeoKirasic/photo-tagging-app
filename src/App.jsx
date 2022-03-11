import React from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
function App() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <Header></Header>
      <GameContainer className=""></GameContainer>
    </div>
  );
}

export default App;
