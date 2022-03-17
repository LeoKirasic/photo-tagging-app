import getCoordinates from './getCoordinates';
const arr = getCoordinates();

function checkCoordinates(id, x, y) {
  const index = arr.findIndex((element) => element.id === id);
  if (x >= arr[index].x - 15 && x <= arr[index].x + 15) {
    if (y >= arr[index].y - 15 && y <= arr[index].y + 15) {
      return id
    }
  }
}

export default checkCoordinates;
