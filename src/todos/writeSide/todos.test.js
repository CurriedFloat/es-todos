import { commandHandlers } from "./todos";
import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_CHECK,
  TODO_ADDED,
  TODO_REMOVED,
  TODO_CHECKED
} from "../constants";

// ADD

test("ADD", () => {
  const events = [];
  const command = { type: TODO_ADD, id: 1, text: "todo a" };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([{ type: TODO_ADDED, id: 1, text: "todo a" }]);
});

test("ADD to short", () => {
  const events = [];
  const command = { type: TODO_ADD, id: 1, text: "a" };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([]);
});

test("ADD id already exists", () => {
  const events = [{ type: TODO_ADDED, id: 1, text: "todo a" }];
  const command = { type: TODO_ADD, id: 1, text: "todo b" };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([{ type: TODO_ADDED, id: 1, text: "todo a" }]);
});

// CHECK

test("CHECK", () => {
  const events = [{ type: TODO_ADDED, id: 1, text: "todo a" }];
  const command = { type: TODO_CHECK, id: 1 };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_CHECKED, id: 1 }
  ]);
});

test("CHECK id does not exist", () => {
  const events = [];
  const command = { type: TODO_CHECK, id: 1 };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([]);
});

test("CHECK already checked", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_CHECKED, id: 1 }
  ];
  const command = { type: TODO_CHECK, id: 1 };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_CHECKED, id: 1 }
  ]);
});

// REMOVE

test("REMOVE", () => {
  const events = [{ type: TODO_ADDED, id: 1, text: "todo a" }];
  const command = { type: TODO_REMOVE, id: 1 };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_REMOVED, id: 1 }
  ]);
});

test("REMOVE id does not exist", () => {
  const events = [];
  const command = { type: TODO_REMOVE, id: 1 };

  const newEvents = commandHandlers(events, command);
  expect(newEvents).toEqual([]);
});
