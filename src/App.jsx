import { React, useState } from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import ViewCharactersModal from './components/ViewCharactersModal';
function App() {
  const [clickedCharacters, setClickedCharacters] = useState([]);

  function addCharacter(id) {
    setClickedCharacters((clickedCharacters) => [...clickedCharacters, id]);
  }

  return (
    <div className="flex justify-center flex-col items-center ">
      <Header></Header>
      <ViewCharactersModal></ViewCharactersModal>

      <GameContainer
        clickedCharacters={clickedCharacters}
        addCharacter={addCharacter}
      ></GameContainer>
    </div>
  );
}

export default App;
