import checkCoordinates from "./checkCoordinates";
import characterAlreadyClicked from "./characterAlreadyClicked";
function menuItemClickHandler(id, x, y, clickedCharacters, addCharacter) {
    if(checkCoordinates(id, x, y) === true && characterAlreadyClicked(id, clickedCharacters) === false) {
        addCharacter(id)
        console.log('all good');
    } else {
        console.log('not all good');
    }
}
export default menuItemClickHandler;