import { useState, useEffect } from 'react';
import React from 'react';
import GameContainer from '../GameContainer';
import Header from '../Header';
import ViewCharactersModal from '../ViewCharactersModal';
import Form from '../Form';

function MainLayout() {
  const [clickedCharacters, setClickedCharacters] = useState<Array<string>>([]);
  const [timer, setTimer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const start = Date.now();
    setTimer(start);
  }, []);

  function addCharacter(id: string) {
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

export default MainLayout;
