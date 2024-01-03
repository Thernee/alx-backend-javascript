export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = array;
  for (const value of array) {
    modifiedArray[array.indexOf(value)] = appendString + value;
  }
  return modifiedArray;
}
