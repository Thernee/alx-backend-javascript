export default function iterateThroughObject(reportWithIterator) {
  let modifiedObjects = '';
  for (const item of reportWithIterator) {
    modifiedObjects += `${item} | `;
  }
  return modifiedObjects.slice(0, -3);
}
