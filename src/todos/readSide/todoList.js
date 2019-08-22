import { appendToArray, removeById, updateById } from "../../support/helpers";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../_constants";

export function todoList(events) {
  const emptyList = [];
  return events.reduce((view, event) => {
    const type = event.type;
    const id = event.id;
    switch (type) {
      case TODO_ADDED:
        return appendToArray(view, { id, text: event.text, checked: false });
      case TODO_REMOVED:
        return removeById(view, id);
      case TODO_CHECKED:
        return updateById(view, id, { checked: true });
      default:
        return view;
    }
  }, emptyList);
}
