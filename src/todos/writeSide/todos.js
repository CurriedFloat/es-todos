import { appendToArray } from "../../support/helpers";
import { add } from "./add";
import { check } from "./check";
import { remove } from "./remove";
import { state } from "./state";
import { TODO_ADD, TODO_REMOVE, TODO_CHECK } from "../constants";

export function commandHandlers(events, cmd) {
  const todos = state(events);
  try {
    switch (cmd.type) {
      case TODO_ADD:
        return appendToArray(events, add(todos, cmd));
      case TODO_CHECK:
        return appendToArray(events, check(todos, cmd));
      case TODO_REMOVE:
        return appendToArray(events, remove(todos, cmd));
      default:
        throw new Error("Unsupported command");
    }
  } catch (error) {
    console.log("Error message:", error.message);
  }
  return events;
}
