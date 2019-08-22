import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

export function itemsLeftCount(events) {
  const setOfUnfinished = new Set();
  return events.reduce((acc, event) => {
    const type = event.type;
    switch (type) {
      case TODO_ADDED:
        acc.add(event.id);
        break;
      case TODO_REMOVED:
        acc.delete(event.id);
        break;
      case TODO_CHECKED:
        acc.delete(event.id);
        break;
      default:
        return acc;
    }
    return acc;
  }, setOfUnfinished).size;
}
