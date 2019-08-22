import { appendToArray } from "../../support/helpers";
import { add } from "./add";
import { check } from "./check";
import { remove } from "./remove";
import { applyEvent } from "./state";

import { TODO_ADD, TODO_REMOVE, TODO_CHECK } from "../_constants";

export function commandHandlers(events, cmd) {
  const state = events.reduce(applyEvent, new Map());
  try {
    switch (cmd.type) {
      case TODO_ADD:
        return appendToArray(events, add(state, cmd));
      case TODO_CHECK:
        return appendToArray(events, check(state, cmd));
      case TODO_REMOVE:
        return appendToArray(events, remove(state, cmd));
      default:
        throw new Error("Unsupported command");
    }
  } catch (error) {
    console.log("Error message:", error.message);
  }
  return events;
}
