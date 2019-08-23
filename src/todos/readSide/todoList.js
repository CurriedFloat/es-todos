import { appendToArray, removeById, updateById } from "../../support/helpers";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

export function todoList(events) {
  const emptyList = [];
  return events.reduce((list, event) => {
    /* FIX */
    return list;
  }, emptyList);
}

/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
export function todoList(events) {
  const emptyList = [];
  return events.reduce((list, event) => {
    const type = event.type;
    const id = event.id;
    switch (type) {
      case TODO_ADDED:
        return appendToArray(list, { id, text: event.text, checked: false });
      case TODO_REMOVED:
        return removeById(list, id);
      case TODO_CHECKED:
        return updateById(list, id, { checked: true });
      default:
        return list;
    }
  }, emptyList);
}
*/
