import { itemsLeftCount } from "./itemsLeftCount";
import { TODO_ADDED, TODO_REMOVED, TODO_CHECKED } from "../constants";

test("ADD => ADD", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo a" },
    { type: TODO_ADDED, id: 2, text: "todo b" }
  ];

  const count = itemsLeftCount(events);
  expect(count).toEqual(2);
});

test("ADD => CHECK", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo c" },
    { type: TODO_CHECKED, id: 1 }
  ];

  const count = itemsLeftCount(events);
  expect(count).toEqual(0);
});

test("ADD => CHECK => REMOVE", () => {
  const events = [
    { type: TODO_ADDED, id: 1, text: "todo d" },
    { type: TODO_CHECKED, id: 1 },
    { type: TODO_REMOVED, id: 1 }
  ];

  const count = itemsLeftCount(events);
  expect(count).toEqual(0);
});
