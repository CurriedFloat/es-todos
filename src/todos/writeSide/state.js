import { updateObject } from "../../support/helpers";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

function applyEvent(state, event) {
  const type = event.type;
  const id = event.id;
  switch (type) {
    case TODO_ADDED: {
      const text = event.text;
      return state.set(id, { text, checked: false });
    }
    /* FIX */
    default:
      return state;
  }
}

export function state(events) {
  const initialState = new Map();
  return events.reduce(applyEvent, initialState);
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
function applyEvent(state, event) {
  const type = event.type;
  const id = event.id;
  switch (type) {
    case TODO_ADDED: {
      const text = event.text;
      return state.set(id, { text, checked: false });
    }
    case TODO_REMOVED: {
      state.delete(id);
      return state;
    }
    case TODO_CHECKED: {
      const oldItem = state.get(id);
      const newItem = updateObject(oldItem, { checked: true });
      return state.set(id, newItem);
    }
    default:
      return state;
  }
}
 */
