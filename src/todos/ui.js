import React, { useState, useReducer } from "react";
import { uuid } from "../support/uuid";
import { EventList } from "../support/eventList";
import { commandHandlers } from "./writeSide/todos";
import { todoList } from "./readSide/todoList";
import { itemsLeftCount } from "./readSide/itemsLeftCount";
import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_CHECK,
  TODO_ADDED,
  TODO_REMOVED,
  TODO_CHECKED
} from "./_constants";

function TodoList({ items, dispatch }) {
  return (
    <div className={"TodoList"}>
      {items.map(item => (
        <div key={item.id} className={item.checked ? "Checked" : ""}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => dispatch({ type: TODO_CHECK, id: item.id })}
          />
          {item.text}
          <button
            className={"RemoveBtn"}
            onClick={() => dispatch({ type: TODO_REMOVE, id: item.id })}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

function AddTodoControl({ dispatch }) {
  const [text, setText] = useState("");
  return (
    <div className={"AddTodoControl"}>
      <input
        type="text"
        placeholder="new todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className={"AddBtn"}
        onClick={() => {
          dispatch({ type: TODO_ADD, id: uuid(), text });
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
}

const initialEvents = [
  { type: TODO_ADDED, id: "1000", text: "have a beer" },
  { type: TODO_ADDED, id: "1001", text: "todo list view model" },
  { type: TODO_ADDED, id: "1002", text: "todos left count view model" },
  { type: TODO_ADDED, id: "1003", text: "add todo" },
  { type: TODO_ADDED, id: "1004", text: "remove todo" },
  { type: TODO_ADDED, id: "1005", text: "check todo" },
  { type: TODO_REMOVED, id: "1000" },
  { type: TODO_CHECKED, id: "1001" },
  { type: TODO_CHECKED, id: "1002" }
];

export function Todos() {
  const [events, dispatch] = useReducer(commandHandlers, initialEvents);
  const list = todoList(events);
  const itemsLeft = itemsLeftCount(events);
  return (
    <>
      TODOs
      <AddTodoControl dispatch={dispatch} />
      items left: {itemsLeft}
      <TodoList items={list} dispatch={dispatch} />
      Events
      <EventList events={events} />
    </>
  );
}
