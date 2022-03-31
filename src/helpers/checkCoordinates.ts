import getCoordinates from './getCoordinates';
const arr = getCoordinates();

function checkCoordinates(id: string, x: number, y: number) {
  const index = arr.findIndex((element) => (element as any).id === id);
  if (x >= (arr[index] as any).x - 15 && x <= (arr[index] as any).x + 15) {
    if (y >= (arr[index] as any).y - 15 && y <= (arr[index] as any).y + 15) {
      return true;
    }
  }
}

export default checkCoordinates;
