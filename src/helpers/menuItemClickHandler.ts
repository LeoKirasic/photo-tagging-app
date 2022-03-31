import checkCoordinates from './checkCoordinates';
import characterAlreadyClicked from './characterAlreadyClicked';
import { showError, showSuccess } from './notifications';

function menuItemClickHandler(
  id: string,
  x: number,
  y: number,
  clickedCharacters: Array<string>,
  addCharacter: Function,
  setFinished: Function
) {
  if (
    checkCoordinates(id, x, y) === true &&
    characterAlreadyClicked(id, clickedCharacters) === false
  ) {
    addCharacter(id);
    showSuccess();
    if (clickedCharacters.length === 2) {
      setFinished();
    }
  } else {
    if (characterAlreadyClicked(id, clickedCharacters) === true) {
      showError('Character Already Found!');
    } else {
      showError('Wrong Character!');
    }
  }
}
export default menuItemClickHandler;
