import { React, useState } from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import ViewCharactersModal from './components/ViewCharactersModal';
function App() {
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  function addCharacter(id) {
    setClickedCharacters((clickedCharacters) => [...clickedCharacters, id]);
  }

  function setFinished() {
    setIsFinished(true);
  }

  return (
    <div className="flex justify-center flex-col items-center ">
      <Header></Header>
      <ViewCharactersModal></ViewCharactersModal>
      <Form isFinished={isFinished}></Form>
      <GameContainer
        clickedCharacters={clickedCharacters}
        addCharacter={addCharacter}
        setFinished={setFinished}
      ></GameContainer>
    </div>
  );
}

export default App;
