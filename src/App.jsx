import { React, useState, useEffect } from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import ViewCharactersModal from './components/ViewCharactersModal';
import Form from './components/Form';
function App() {
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const start = Date.now();
    console.log('start time ', start);
    setTimer(start);
  }, []);

  function addCharacter(id) {
    setClickedCharacters((clickedCharacters) => [...clickedCharacters, id]);
  }

  function setFinished() {
    setIsFinished(true);

    const milis = Date.now() - timer;

    setTimer(Math.floor(milis / 1000));
  }

  return (
    <div className="flex justify-center flex-col items-center ">
      <Header></Header>
      <ViewCharactersModal></ViewCharactersModal>
      <Form isFinished={isFinished} time={timer}></Form>
      <GameContainer
        clickedCharacters={clickedCharacters}
        addCharacter={addCharacter}
        setFinished={setFinished}
      ></GameContainer>
    </div>
  );
}

export default App;
