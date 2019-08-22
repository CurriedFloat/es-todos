import { todoList } from "./todoList";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

test("ADD => ADD", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_ADDED, id: 2, text: "todo b" }
  ];

  const list = todoList(events);
  expect(list).toEqual([
    { id: 1, text: "todo a", checked: false },
    { id: 2, text: "todo b", checked: false }
  ]);
});

test("ADD => CHECK", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo c" },
    { type: TODO_CHECKED, id: 1 }
  ];

  const list = todoList(events);
  expect(list).toEqual([{ id: 1, text: "todo c", checked: true }]);
});

test("ADD => CHECK => REMOVE", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo d" },
    { type: TODO_CHECKED, id: 1 },
    { type: TODO_REMOVED, id: 1 }
  ];

  const list = todoList(events);
  expect(list).toEqual([]);
});
