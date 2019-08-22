import { state } from "./state";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

test("ADD => ADD", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_ADDED, id: 2, text: "todo b" }
  ];

  const todos = state(events);
  expect(todos.get(1)).toEqual({ checked: false, text: "todo a" });
  expect(todos.get(2)).toEqual({ checked: false, text: "todo b" });
});

test("ADD => CHECK", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo c" },
    { type: TODO_CHECKED, id: 1 }
  ];

  const todos = state(events);
  expect(todos.get(1)).toEqual({ checked: true, text: "todo c" });
});

test("ADD => CHECK => REMOVE", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo d" },
    { type: TODO_CHECKED, id: 1 },
    { type: TODO_REMOVED, id: 1 }
  ];

  const todos = state(events);
  expect(todos.has(1)).toBe(false);
});
